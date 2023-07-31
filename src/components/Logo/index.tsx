export default function Logo() {
  return (
    <div className="grid grid-cols-2 grid-rows-2">
      <div className="col-span-1 row-span-1 border-foreground border-2 border-solid w-[16px] h-[16px]"></div>
      <div className="col-span-1 row-span-1 border-background border-2 border-solid w-[16px] h-[16px] bg-foreground relative">
        <div className="w-[11px] h-[11px] bg-background absolute right-0 top-0"></div>
      </div>
      <div className="col-span-1 row-span-1 border-background border-2 border-solid w-[16px] h-[16px] bg-foreground relative">
        <div className="w-[11px] h-[11px] bg-background absolute left-0 bottom-0"></div>
      </div>
      <div className="col-span-1 row-span-1 border-foreground border-2 border-solid w-[16px] h-[16px]"></div>
    </div>
  )
}
