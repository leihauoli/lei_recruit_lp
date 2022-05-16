const playScheduleAnimation = (schedule, time) => {
    const parent = schedule.parentElement
    const isOpened = parent.classList.contains("schedule-opened")
    parent.classList.remove(isOpened ? "schedule-opened" : "schedule-closed")
    window.requestAnimationFrame((time) => {
        window.requestAnimationFrame((time) => {
            parent.classList.add( isOpened ? "schedule-closed" : "schedule-opened")
        })
    })
}
