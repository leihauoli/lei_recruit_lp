const playScheduleAnimation = (schedule, time) => {
    const isOpened = schedule.classList.contains("schedule-opened")
    schedule.classList.remove(isOpened ? "schedule-opened" : "schedule-closed")
    window.requestAnimationFrame((time) => {
        window.requestAnimationFrame((time) => {
            schedule.classList.add( isOpened ? "schedule-closed" : "schedule-opened")
        })
    })
}
