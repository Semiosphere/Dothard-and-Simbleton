import { getBusinesses, NYBusinesses, manufacturingBusinesses } from "./database.js"
import { Business } from "./Business.js"
import { agents, findCompanyBySearch, findAgentBySearch } from "./database.js"
import { PurchasingAgent } from "./PurchasingAgents.js"


const mainContainer = document.querySelector("#container")
const newYorkContainer = document.querySelector(".businessList--newYork")
const manufacturingContainer = document.querySelector(".businessList--manufacturing")
const purchasingAgentContainer = document.querySelector(".agents")



export const BusinessList = () => {
    let businessArray = getBusinesses()
    mainContainer.innerHTML += "<h1>Active Businesses</h1>"
    businessArray.forEach(
        (businessObject) => {
            mainContainer.innerHTML += Business(businessObject)
        }
    );

    let NYBusinessesArray = NYBusinesses()
    newYorkContainer.innerHTML += "<h1>New York Businesses</h1>"
    NYBusinessesArray.forEach(
        (businessObject) => {
            newYorkContainer.innerHTML += Business(businessObject)
        }
    );

    let manufacturingBusinessesArray = manufacturingBusinesses()
    manufacturingContainer.innerHTML += "<h1>Manufacturing Businesses</h1>"
    manufacturingBusinessesArray.forEach(
        (businessObject) => {
            manufacturingContainer.innerHTML += Business(businessObject)
        }
    );

    let purchasingAgentsArray = agents()
    purchasingAgentContainer.innerHTML += "<h1>Purchasing Agents</h1>"
    purchasingAgentsArray.forEach(
        (businessObject) => {
            purchasingAgentContainer.innerHTML += PurchasingAgent(businessObject)
        }
    );

    const companySearchResultArticle = document.querySelector(".foundCompanies")

    document
        .querySelector("#pageSearch")
            .addEventListener(
                "keypress",
                keyPressEvent => {
                    if (keyPressEvent.charCode === 13) {
                         businessArray.filter(businessObject => businessObject.companyName.includes(keyPressEvent.target.value/*.toUpperCase()*/))

                        let searchBusinesses = findCompanyBySearch(keyPressEvent.target.value);
                        searchBusinesses.forEach((businessObject) => {companySearchResultArticle.innerHTML += Business(businessObject)})
                    }
            });    
    



    const agentSearchResultArticle = document.querySelector(".foundAgents")

    document
        .querySelector("#pageSearch")
            .addEventListener(
                "keypress",
                keyPressEvent => {
                    if (keyPressEvent.charCode === 13) {       
                                let searchAgents = findAgentBySearch(keyPressEvent.target.value);
                                searchAgents.forEach((businessObject) => {agentSearchResultArticle.innerHTML += PurchasingAgent(businessObject)})
                            }
                    });            
 
}



