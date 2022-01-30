const { PlainText } = wp.editor;
const { registerBlockType } = wp.blocks;

//Import Styles
import "./style.css";
import "./editor.css";

registerBlockType('accordion-block/main', {   
    title: 'Accordion Block',
    icon: 'menu',
    category: 'common',

    attributes: {

        title: {
          source: 'text',
          selector: '.accordion__title'
        },

    },

    edit( { attributes, setAttributes  } ) {

        return (
            <PlainText
                onChange={ content => setAttributes({ title: content }) }
                value={ attributes.title }
                placeholder="Enter title"
                className="heading"
            />
        )

    },

    save( { attributes } ) {

        return (
            <h2>{ attributes.title }</h2>
        )
    }

});
