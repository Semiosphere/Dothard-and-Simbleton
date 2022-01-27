export const Business = ( businessObject ) => {
    return `
        <section class="business">
            <h2 class="business__name">${businessObject.companyName}</h2>
            <div class="business__address">
                <dl>
                <dt>${businessObject.addressFullStreet}</dt>
                <dt>${businessObject.addressCity}, ${businessObject.addressStateCode} ${businessObject.addressZipCode}</dt>
                </dl>
            </div>
        </section>
    `
}
