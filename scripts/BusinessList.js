import { getBusinesses } from "./database.js"
import { Business } from "./Business.js"


const contentTarget = document.querySelector("#container")

export const BusinessList = () => {
    const businessArray = getBusinesses()
    contentTarget.innerHTML = "<h1>Active Businesses</h1>"

    businessArray.forEach(
        (businessObject) => {
            contentTarget.innerHTML += Business(businessObject)
        }
    );
}