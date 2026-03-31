import { useEffect, useRef } from 'react'

const CustomCursor = () => {
  const dotRef  = useRef(null)
  const ringRef = useRef(null)

  useEffect(() => {
    const dot  = dotRef.current
    const ring = ringRef.current
    let mx = 0, my = 0, rx = 0, ry = 0, id

    const onMove = (e) => {
      mx = e.clientX
      my = e.clientY
      dot.style.transform = `translate(${mx}px,${my}px)`
    }

    const loop = () => {
      rx += (mx - rx) * 0.12
      ry += (my - ry) * 0.12
      ring.style.transform = `translate(${rx}px,${ry}px)`
      id = requestAnimationFrame(loop)
    }

    const onDown = () => {
      ring.style.width  = '48px'
      ring.style.height = '48px'
      ring.style.borderColor = '#0d9488'
    }
    const onUp = () => {
      ring.style.width  = '36px'
      ring.style.height = '36px'
      ring.style.borderColor = 'rgba(13,148,136,0.5)'
    }
    const onEnter = () => {
      ring.style.width           = '56px'
      ring.style.height          = '56px'
      ring.style.borderColor     = '#0d9488'
      ring.style.backgroundColor = 'rgba(13,148,136,0.08)'
    }
    const onLeave = () => {
      ring.style.width           = '36px'
      ring.style.height          = '36px'
      ring.style.borderColor     = 'rgba(13,148,136,0.5)'
      ring.style.backgroundColor = 'transparent'
    }

    window.addEventListener('mousemove', onMove)
    window.addEventListener('mousedown', onDown)
    window.addEventListener('mouseup',   onUp)
    id = requestAnimationFrame(loop)

    const links = document.querySelectorAll('a, button')
    links.forEach((el) => {
      el.addEventListener('mouseenter', onEnter)
      el.addEventListener('mouseleave', onLeave)
    })

    return () => {
      window.removeEventListener('mousemove', onMove)
      window.removeEventListener('mousedown', onDown)
      window.removeEventListener('mouseup',   onUp)
      cancelAnimationFrame(id)
      links.forEach((el) => {
        el.removeEventListener('mouseenter', onEnter)
        el.removeEventListener('mouseleave', onLeave)
      })
    }
  }, [])

  return (
    <>
      {/* Dot */}
      <div
        ref={dotRef}
        style={{
          position: 'fixed', top: 0, left: 0,
          width: '8px', height: '8px',
          background: '#14b8a6', borderRadius: '50%',
          pointerEvents: 'none', zIndex: 9999,
          transform: 'translate(-50%,-50%)',
          transition: 'transform 0.07s linear',
        }}
      />
      {/* Ring */}
      <div
        ref={ringRef}
        style={{
          position: 'fixed', top: 0, left: 0,
          width: '36px', height: '36px',
          border: '2px solid rgba(13,148,136,0.5)', borderRadius: '50%',
          pointerEvents: 'none', zIndex: 9998,
          transform: 'translate(-50%,-50%)',
          transition: 'width 0.2s, height 0.2s, background-color 0.2s, border-color 0.2s',
        }}
      />
    </>
  )
}

export default CustomCursor