import { DefaultDocumentNodeResolver } from 'sanity/desk'
import Iframe from 'sanity-plugin-iframe-pane'


// need to get local host to change to where ever we are. 

export const defaultDocumentNode: DefaultDocumentNodeResolver = (S, {schemaType}) => {
  
   
    switch(schemaType) {

        case 'measure':
            return S.document().views([
                S.view.form(),
                S.view
                    .component(Iframe)
                    .options({
                       url: (doc) => doc?.slug?.current 
                       ? `http://localhost:3000/api/preview?slug=${doc.slug.current}`
                       : `http://localhost:3000/api/preview`,
                    })
                    .title('Preview')
            ])

            case 'aboutPage':
            return S.document().views([
                S.view.form(),
                S.view
                    .component(Iframe)
                    .options({
                       url: (doc) => doc?.slug?.current 
                       ? `http://localhost:3000/api/preview?slug=${doc.slug.current}`
                       : `http://localhost:3000/api/preview`,
                    })
                    .title('Preview')
            ])
        default:
            return S.document().views([S.view.form()])
    
       
       
       
        }
}