const BoxTemplates = [
        {
            TemplateId: 1,
            TemplateHtml: `<!-- wp:columns {"verticalAlignment":"center","className":"template1"} --> 
        <div class="wp-block-columns are-vertically-aligned-center template1"><!-- wp:column {"verticalAlignment":"center"} --> 
        <div class="wp-block-column is-vertically-aligned-center"><!-- wp:image {"id":26,"sizeSlug":"medium"} --> 
        <figure class="wp-block-image size-medium"><img src="https://purepng.com/public/uploads/large/purepng.com-black-t-shirtclothingblack-t-shirtfashion-dress-shirt-black-cloth-tshirt-631522326884bzr0p.png" alt="" class="wp-image-26"/></figure> 
        <!-- /wp:image --></div> 
        <!-- /wp:column --> 
        <!-- wp:column {"verticalAlignment":"center"} --> 
        <div class="wp-block-column is-vertically-aligned-center"><!-- wp:html --> 
        <ul><li>Opción de ejemplo 1</li><li>Opción de ejemplo 2</li><li>Opción de ejemplo 3</li></ul> 
        <!-- /wp:html --> 
        <!-- wp:paragraph --> 
        <p></p> 
        <!-- /wp:paragraph --></div> 
        <!-- /wp:column --> 
        <!-- wp:column {"verticalAlignment":"center"} --> 
        <div class="wp-block-column is-vertically-aligned-center"><!-- wp:buttons --> 
        <div class="wp-block-buttons"><!-- wp:button --> 
        <div class="wp-block-button"><a class="wp-block-button__link">COMPRAR</a></div> 
        <!-- /wp:button --></div> 
        <!-- /wp:buttons --></div> 
        <!-- /wp:column --></div> 
        <!-- /wp:columns -->`,
            TemplateCss: ".template1{display:flex;align-items:center;width:100%;background:#faf5f0;border:1px solid gray;box-shadow:0 3px 3px #611905;margin:24px auto;padding:24px 10px;text-align:center}.template1>div:first-child{flex-basis:34%!important;width:100%!important}.template1>div:first-child img{width:75%}.template1>div:nth-child(2){flex-basis:40%}.template1>div:nth-child(3){flex-basis:25%}.template1 .wp-block-column .wp-block-image{margin:16px}.wp-block-column:not(:first-child){margin-left:0}.wp-block-buttons .wp-block-button{margin:0}.template1 .wp-block-column .wp-block-buttons .wp-block-button a{padding:10px 20px;border:2px solid #000;background-color:#365e31;color:#fff;font-size:20px;transition:1s}.template1 .wp-block-column .wp-block-buttons .wp-block-button a:hover{border:2px solid #000;background-color:#172815!important;color:#fff;transform:scale(1.15)}.template1 .wp-block-column ul li{margin:16px 0;text-align:left;font-size:18px}.template1 .wp-block-column ul li::marker{color:#172815;font-size:23px}",
            TemplateImg: "../images/box-template1.jpg",
        },
        {
            TemplateId: 2,
            TemplateHtml: `<!-- wp:columns {"className":"template2"} -->
            <div class="wp-block-columns template2"><!-- wp:column -->
            <div class="wp-block-column"><!-- wp:heading {"level":3} -->
            <h3>Ventajas</h3>
            <!-- /wp:heading -->
            
            <!-- wp:list -->
            <ul><li>Ventaja número 1</li><li>Ventaja número 2</li><li>Ventaja número 3</li></ul>
            <!-- /wp:list -->
            
            <!-- wp:paragraph -->
            <p></p>
            <!-- /wp:paragraph --></div>
            <!-- /wp:column -->
            
            <!-- wp:column -->
            <div class="wp-block-column"><!-- wp:heading {"level":3} -->
            <h3>Desventajas</h3>
            <!-- /wp:heading -->
            
            <!-- wp:list -->
            <ul><li>Desventaja número 1</li><li>Desventaja número 2</li><li>Desventaja número 3</li></ul>
            <!-- /wp:list --></div>
            <!-- /wp:column --></div>
            <!-- /wp:columns -->
            `,
            TemplateCss: ".template2{display:flex;flex-wrap:wrap;border:2px solid #34d399;padding:8px;background:#faf5f0;border:1px solid gray;box-shadow:0 3px 3px #611905}.template2 h3{margin-left:40px}@media(max-width:768px){.template2 h3{margin-left:8px}}.template2>div:first-child h3{color:#1b4d1b}.template2>div:nth-child(2) h3{color:#962424}.template2 ul{text-align:center}.template2 ul li{margin:8px}",
            TemplateImg: "../images/box-template2.jpg",
        }
    ]

export default BoxTemplates