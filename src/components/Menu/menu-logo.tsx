import Logo from '../Logo'

export default function MenuLogo() {
  return (
    <div className="pr-8">
      <div className="flex gap-2 items-center">
        <Logo />
        <p className="font-bold">Chess</p>
      </div>
    </div>
  )
}
