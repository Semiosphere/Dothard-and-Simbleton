import { getBusinesses, NYBusinesses, manufacturingBusinesses } from "./database.js"
import { Business } from "./Business.js"


const mainContainer = document.querySelector("#container")
const newYorkContainer = document.querySelector(".businessList--newYork")
const manufacturingContainer = document.querySelector(".businessList--manufacturing")


export const BusinessList = () => {
    let businessArray = getBusinesses()
    mainContainer.innerHTML += "<h1>Active Businesses</h1>"
    businessArray.forEach(
        (businessObject) => {
            mainContainer.innerHTML += Business(businessObject)
        }
    );

    let NYBusinessesArray = NYBusinesses()
    newYorkContainer.innerHTML += "<h1> New York Businesses </h1>"
    NYBusinessesArray.forEach(
        (businessObject) => {
            newYorkContainer.innerHTML += Business(businessObject)
        }
    );

    let manufacturingBusinessesArray = manufacturingBusinesses()
    manufacturingContainer.innerHTML += "<h1> Manufacturing Businesses </h1>"
    manufacturingBusinessesArray.forEach(
        (businessObject) => {
            manufacturingContainer.innerHTML += Business(businessObject)
        }
    );
}