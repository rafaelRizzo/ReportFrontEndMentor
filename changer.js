let daily = document.querySelector("#daily")
let weekly = document.querySelector("#weekly")
let monthly = document.querySelector("#monthly")

let main_work_hour = document.querySelector("#card-work #main-hours")
let main_play_hour = document.querySelector("#card-play #main-hours")
let main_study_hour = document.querySelector("#card-study #main-hours")
let main_exercice_hour = document.querySelector("#card-exercice #main-hours")
let main_social_hour = document.querySelector("#card-social #main-hours")
let main_self_care_hour = document.querySelector("#card-self-care #main-hours")

let last_work_hour = document.querySelector("#card-work #last-hours")
let last_play_hour = document.querySelector("#card-play #last-hours")
let last_study_hour = document.querySelector("#card-study #last-hours")
let last_exercice_hour = document.querySelector("#card-exercice #last-hours")
let last_social_hour = document.querySelector("#card-social #last-hours")
let last_self_care_hour = document.querySelector("#card-self-care #last-hours")

fetch("./data.json")
    .then(function (resp) {
        return resp.json()
    })
    .then(function (data) {
        if (daily.classList.contains("active")) {
            main_work_hour.innerHTML = `${data[0].timeframes.daily.current}hrs`
            main_play_hour.innerHTML = `${data[1].timeframes.daily.current}hrs`
            main_study_hour.innerHTML = `${data[2].timeframes.daily.current}hrs`
            main_exercice_hour.innerHTML = `${data[3].timeframes.daily.current}hrs`
            main_social_hour.innerHTML = `${data[4].timeframes.daily.current}hrs`
            main_self_care_hour.innerHTML = `${data[5].timeframes.daily.current}hrs`

            last_work_hour.innerHTML = `Last Daily - ${data[0].timeframes.daily.previous}hrs`
            last_play_hour.innerHTML = `Last Daily - ${data[1].timeframes.daily.previous}hrs`
            last_study_hour.innerHTML = `Last Daily - ${data[2].timeframes.daily.previous}hrs`
            last_exercice_hour.innerHTML = `Last Daily - ${data[3].timeframes.daily.previous}hrs`
            last_social_hour.innerHTML = `Last Daily - ${data[4].timeframes.daily.previous}hrs`
            last_self_care_hour.innerHTML = `Last Daily - ${data[5].timeframes.daily.previous}hrs`

            daily.classList.add("active")
            weekly.classList.remove("active")
            monthly.classList.remove("active")
        }

        daily.addEventListener("click", (e) => {
            e.preventDefault()
            main_work_hour.innerHTML = `${data[0].timeframes.daily.current}hrs`
            main_play_hour.innerHTML = `${data[1].timeframes.daily.current}hrs`
            main_study_hour.innerHTML = `${data[2].timeframes.daily.current}hrs`
            main_exercice_hour.innerHTML = `${data[3].timeframes.daily.current}hrs`
            main_social_hour.innerHTML = `${data[4].timeframes.daily.current}hrs`
            main_self_care_hour.innerHTML = `${data[5].timeframes.daily.current}hrs`

            last_work_hour.innerHTML = `Last Daily - ${data[0].timeframes.daily.previous}hrs`
            last_play_hour.innerHTML = `Last Daily - ${data[1].timeframes.daily.previous}hrs`
            last_study_hour.innerHTML = `Last Daily - ${data[2].timeframes.daily.previous}hrs`
            last_exercice_hour.innerHTML = `Last Daily - ${data[3].timeframes.daily.previous}hrs`
            last_social_hour.innerHTML = `Last Daily - ${data[4].timeframes.daily.previous}hrs`
            last_self_care_hour.innerHTML = `Last Daily - ${data[5].timeframes.daily.previous}hrs`

            daily.classList.add("active")
            weekly.classList.remove("active")
            monthly.classList.remove("active")
        })

        weekly.addEventListener("click", (e) => {
            e.preventDefault()
            main_work_hour.innerHTML = `${data[0].timeframes.weekly.current}hrs`
            main_play_hour.innerHTML = `${data[1].timeframes.weekly.current}hrs`
            main_study_hour.innerHTML = `${data[2].timeframes.weekly.current}hrs`
            main_exercice_hour.innerHTML = `${data[3].timeframes.weekly.current}hrs`
            main_social_hour.innerHTML = `${data[4].timeframes.weekly.current}hrs`
            main_self_care_hour.innerHTML = `${data[5].timeframes.weekly.current}hrs`

            last_work_hour.innerHTML = `Last Daily - ${data[0].timeframes.weekly.previous}hrs`
            last_play_hour.innerHTML = `Last Daily - ${data[1].timeframes.weekly.previous}hrs`
            last_study_hour.innerHTML = `Last Daily - ${data[2].timeframes.weekly.previous}hrs`
            last_exercice_hour.innerHTML = `Last Daily - ${data[3].timeframes.weekly.previous}hrs`
            last_social_hour.innerHTML = `Last Daily - ${data[4].timeframes.weekly.previous}hrs`
            last_self_care_hour.innerHTML = `Last Daily - ${data[5].timeframes.weekly.previous}hrs`

            daily.classList.remove("active")
            weekly.classList.add("active")
            monthly.classList.remove("active")
        })

        monthly.addEventListener("click", (e) => {
            e.preventDefault()
            main_work_hour.innerHTML = `${data[0].timeframes.monthly.current}hrs`
            main_play_hour.innerHTML = `${data[1].timeframes.monthly.current}hrs`
            main_study_hour.innerHTML = `${data[2].timeframes.monthly.current}hrs`
            main_exercice_hour.innerHTML = `${data[3].timeframes.monthly.current}hrs`
            main_social_hour.innerHTML = `${data[4].timeframes.monthly.current}hrs`
            main_self_care_hour.innerHTML = `${data[5].timeframes.monthly.current}hrs`

            last_work_hour.innerHTML = `Last Daily - ${data[0].timeframes.monthly.previous}hrs`
            last_play_hour.innerHTML = `Last Daily - ${data[1].timeframes.monthly.previous}hrs`
            last_study_hour.innerHTML = `Last Daily - ${data[2].timeframes.monthly.previous}hrs`
            last_exercice_hour.innerHTML = `Last Daily - ${data[3].timeframes.monthly.previous}hrs`
            last_social_hour.innerHTML = `Last Daily - ${data[4].timeframes.monthly.previous}hrs`
            last_self_care_hour.innerHTML = `Last Daily - ${data[5].timeframes.monthly.previous}hrs`

            daily.classList.remove("active")
            weekly.classList.remove("active")
            monthly.classList.add("active")
        })
    })