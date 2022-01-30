const { PlainText } = wp.editor;
const { registerBlockType } = wp.blocks;

//Import Styles
import "./style.css";
import "./editor.css";

registerBlockType('test-123/main', {   
    title: 'Test Block',
    icon: 'menu',
    category: 'common',

    attributes: {

        title: {
          source: 'text',
          selector: '.accordion__title'
        },

    },

    edit( { attributes, setAttributes, className  } ) {

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
            <h2 className="accordion__title">{ attributes.title }</h2>
        )
    }

});
