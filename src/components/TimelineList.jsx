import TimelineBox from "../components/TimelineBox"

function TimelineList({ data, activeId, onSelect }) {
  return (
    <div className="relative">
      
      {/* LINE */}
      <div className="-left-2.5 md:block absolute md:left-1/2 md:top-0 h-full w-0.5 bg-slate-300 md:-translate-x-1/2"></div>

      {data.map((item) => {
        const isLeft = item.type === "education"
        const isActive = activeId === item.id

        return (
          <div key={item.id} className="relative mb-12">
            
            {/* DOT */}
            <div className="hidden md:block absolute left-1/2 top-6 w-4 h-4 bg-primary rounded-full -translate-x-1/2 z-10"></div>

            {/* GRID */}
            <div className="grid md:grid-cols-2 items-center">
              
              {/* LEFT */}
              <div className={`${isLeft ? "md:pr-10 md:text-right" : "hidden md:block"} hidden md:block`}>
                {isLeft && (
                  <TimelineBox
                    item={item}
                    onSelect={onSelect}
                    isActive={isActive}
                  />
                )}
              </div>

              {/* RIGHT */}
              <div className={`${!isLeft ? "md:pl-10" : "hidden md:block"} hidden md:block`}>
                {!isLeft && (
                  <TimelineBox
                    item={item}
                    onSelect={onSelect}
                    isActive={isActive}
                  />
                )}
              </div>

              {/* MOBILE (ALL LEFT) */}
              <div className="md:hidden">
                <TimelineBox
                  item={item}
                  onSelect={onSelect}
                  isActive={isActive}
                />
              </div>

            </div>
          </div>
        )
      })}
    </div>
  )
}

export default TimelineList