import { useEffect, useRef } from "react"

class Particle {
  x: number
  y: number
  size: number
  speedX: number
  speedY: number
  life: number
  maxLife: number

  constructor(mx: number, my: number) {
    this.x = mx + (Math.random() - 0.5) * 40
    this.y = my + (Math.random() - 0.5) * 40
    this.size = Math.random() * 4 + 1
    const angle = Math.random() * Math.PI * 2
    const speed = Math.random() * 2 + 0.5
    this.speedX = Math.cos(angle) * speed
    this.speedY = Math.sin(angle) * speed
    this.life = 0
    this.maxLife = 40 + Math.random() * 30
  }

  update() {
    this.x += this.speedX
    this.y += this.speedY
    this.speedX *= 0.97
    this.speedY *= 0.97
    this.life++
  }

  draw(ctx: CanvasRenderingContext2D) {
    const alpha = 1 - this.life / this.maxLife
    const colors = ["#10b981", "#3b82f6", "#8b5cf6", "#06b6d4"]
    ctx.beginPath()
    ctx.arc(this.x, this.y, this.size * alpha, 0, Math.PI * 2)
    ctx.fillStyle = colors[Math.floor(Math.random() * colors.length)]
    ctx.globalAlpha = alpha * 0.6
    ctx.fill()
    ctx.globalAlpha = 1
  }
}

export default function MouseTrail() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const mouseRef = useRef({ x: -1000, y: -1000 })
  const particlesRef = useRef<Particle[]>([])

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext("2d")!
    if (!ctx) return

    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    resize()
    window.addEventListener("resize", resize)

    const onMouse = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY }
    }
    window.addEventListener("mousemove", onMouse)

    let animId: number

    function animate() {
      ctx!.clearRect(0, 0, canvas!.width, canvas!.height)

      if (Math.random() < 0.4) {
        particlesRef.current.push(new Particle(mouseRef.current.x, mouseRef.current.y))
      }

      particlesRef.current = particlesRef.current.filter((p) => p.life < p.maxLife)

      particlesRef.current.forEach((p) => {
        p.update()
        p.draw(ctx)
      })

      animId = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener("resize", resize)
      window.removeEventListener("mousemove", onMouse)
      cancelAnimationFrame(animId)
    }
  }, [])

  return <canvas ref={canvasRef} className="fixed inset-0 pointer-events-none z-50" />
}
