export const PurchasingAgent = ( agentObject ) => {
   return `
        <section class="agents">
            <h3 class="agent__name">${agentObject.fullName}</h3>
            <div class="business__info">
                <dl>
                <dt><b>${agentObject.company}</b></dt>
                <dt><b>${agentObject.phoneNumber}</b></dt>
                </dl>
            </div>
        </section>
        `
        
    
    }
    
    
