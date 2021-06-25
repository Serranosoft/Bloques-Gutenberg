const Templates = [
    {
        id: 1,
        name: "amazon-horizontal",
        type: "box",
        TemplateHtml: `<!-- wp:columns {"verticalAlignment":"center","className":"template1"} -->
        <div class="wp-block-columns are-vertically-aligned-center template1"><!-- wp:column {"verticalAlignment":"center"} -->
        <div class="wp-block-column is-vertically-aligned-center"><!-- wp:image {"id":26,"sizeSlug":"medium"} -->
        <figure class="wp-block-image size-medium"><img src="https://purepng.com/public/uploads/large/purepng.com-black-t-shirtclothingblack-t-shirtfashion-dress-shirt-black-cloth-tshirt-631522326884bzr0p.png" alt="" class="wp-image-26"/></figure>
        <!-- /wp:image --></div>
        <!-- /wp:column -->
        
        <!-- wp:column {"verticalAlignment":"center"} -->
        <div class="wp-block-column is-vertically-aligned-center"><!-- wp:list -->
        <ul><li>Opción de prueba 1</li><li>Opción de prueba 2</li><li>Opción de prueba 3</li></ul>
        <!-- /wp:list --></div>
        <!-- /wp:column -->
        
        <!-- wp:column {"verticalAlignment":"center"} -->
        <div class="wp-block-column is-vertically-aligned-center"><!-- wp:buttons -->
        <div class="wp-block-buttons"><!-- wp:button -->
        <div class="wp-block-button"><a class="wp-block-button__link">COMPRAR</a></div>
        <!-- /wp:button --></div>
        <!-- /wp:buttons --></div>
        <!-- /wp:column --></div>
        <!-- /wp:columns -->`,
        TemplateCss: ".template1{margin:24px auto;padding:24px 10px;text-align:center}.template1>div:first-child{flex-basis:30%!important;width:100%!important}.template1>div:first-child img{width:90%}.template1>div:nth-child(2){flex-basis:45%;}.template1>div:nth-child(2) ul{padding-left:24px}.template1>div:nth-child(3){flex-basis:25%}.template1 .wp-block-column .wp-block-image{margin:16px}.wp-block-column:not(:first-child){margin-left:0}.wp-block-buttons .wp-block-button{margin:0}.template1 .wp-block-column .wp-block-buttons .wp-block-button a{padding:10px 20px;border:2px solid #000;font-size:20px} .template1 .wp-block-column ul li{margin:16px 0;text-align:left;font-size:18px;list-style-position:inside;}.template1 .wp-block-column ul li::marker{color:#172815;font-size:23px}@media(max-width:768px){.template1 .wp-block-buttons .wp-block-button {margin: 0 auto;}}\n",
        TemplateImg: "../images/box-template1.jpg",
    },
    {
        id: 2,
        name: "ventaja-desventaja",
        type: "box",
        TemplateHtml: `<!-- wp:columns {"className":"template2"} -->
        <div class="wp-block-columns template2"><!-- wp:column -->
        <div class="wp-block-column"><!-- wp:heading {"level":3} -->
        <h3>Ventajas</h3>
        <!-- /wp:heading -->
        
        <!-- wp:list -->
        <ul><li>Descripción elaborada de la ventaja número 1</li><li>Descripción elaborada de la ventaja número 2</li><li>Descripción elaborada de la ventaja número 3</li></ul>
        <!-- /wp:list --></div>
        <!-- /wp:column -->
        
        <!-- wp:column -->
        <div class="wp-block-column"><!-- wp:heading {"level":3} -->
        <h3>Desventajas</h3>
        <!-- /wp:heading -->
        
        <!-- wp:list -->
        <ul><li>Descripción elaborada del inconveniente número 1</li><li>Descripción elaborada del inconveniente número 2</li></ul>
        <!-- /wp:list --></div>
        <!-- /wp:column --></div>
        <!-- /wp:columns -->`,
        TemplateCss: ".template2{width:100%;display:flex;flex-wrap:wrap;padding:8px 4px}.template2 h3{font-size:24px;font-weight:700}.template2>div:first-child h3{color:#1b4d1b}.template2>div:nth-child(2) h3{color:#962424}.template2 ul{padding:0;list-style:none}.template2 ul>*{text-align:left}.template2 ul li{margin:10px 0;font-size:18px;list-style-position:inside}\n",
        TemplateImg: "../images/box-template2.jpg",
    },
    {
        id: 3,
        name: "call-to-action",
        type: "box",
        TemplateHtml: `<!-- wp:table {"className":"template3"} -->
        <figure class="wp-block-table template3"><table><tbody><tr><td class="has-text-align-center" data-align="center">Prueba los bloques gutenberg</td></tr><tr><td class="has-text-align-center" data-align="center">Los bloques CTA (Call to Action) son perfectos para destacar información y atraer al usuario mejorando la conversión e incitando al lector en hacer clic en el contenido</td></tr><tr><td class="has-text-align-center" data-align="center"><a href="https://bloques-gutenberg.com">Comprar</a></td></tr></tbody></table></figure>
        <!-- /wp:table -->`,
        TemplateCss: ".template3{width:100%;margin:0 auto;padding:8px;overflow-x:auto;}.template3 table{width:100%;border-collapse:collapse}.template3 tr td {border:0;}.template3 tbody>tr:first-child td{font-size:26px;line-height:2.2;font-weight:bold;}@media(max-width:768px){.template3 tbody>tr:first-child td{line-height:1.5}.template3 tbody>tr:nth-child(2) td{display:block;margin:8px 0}.template3 tbody>tr:nth-child(3) td a{width:100%!important}}.template3 tbody>tr:nth-child(3) td a{font-size:20px;text-decoration: none;line-height:3;}\n",
        TemplateImg: "../images/box-template3.jpg"
    },
    {
        id: 4,
        name: "ventaja-desventaja-con-encabezado",
        type: "box",
        TemplateHtml: `<!-- wp:columns {"className":"template4"} -->
            <div class="wp-block-columns template4"><!-- wp:column -->
            <div class="wp-block-column"><!-- wp:heading {"align":"center","level":4} -->
            <h4 class="has-text-align-center">Ventajas</h4>
            <!-- /wp:heading -->
            
            <!-- wp:heading {"level":5} -->
            <h5>Subtitulo</h5>
            <!-- /wp:heading -->
            
            <!-- wp:list -->
            <ul><li>Descripción elaborada elaborada elaborada elaborada elaborada elaborada de la ventaja</li></ul>
            <!-- /wp:list -->
            
            <!-- wp:heading {"level":5} -->
            <h5>Subtitulo</h5>
            <!-- /wp:heading -->
            
            <!-- wp:list -->
            <ul><li>Descripción elaborada elaborada elaborada elaborada elaborada elaborada de la ventaja número</li></ul>
            <!-- /wp:list --></div>
            <!-- /wp:column -->
            
            <!-- wp:column -->
            <div class="wp-block-column"><!-- wp:heading {"align":"center","level":4} -->
            <h4 class="has-text-align-center">Desventajas</h4>
            <!-- /wp:heading -->
            
            <!-- wp:heading {"level":5} -->
            <h5>Subtitulo</h5>
            <!-- /wp:heading -->
            
            <!-- wp:list -->
            <ul><li>Descripción elaborada elaborada elaborada elaborada elaborada elaborada de la desventaja</li></ul>
            <!-- /wp:list -->
            
            <!-- wp:heading {"level":5} -->
            <h5>Subtitulo</h5>
            <!-- /wp:heading -->
            
            <!-- wp:list -->
            <ul><li>Descripción elaborada elaborada elaborada elaborada elaborada elaborada de la desventaja</li></ul>
            <!-- /wp:list --></div>
            <!-- /wp:column --></div>
            <!-- /wp:columns -->
            `,
        TemplateCss: ".template4{width:100%;padding:3px 12px}.template4>div{flex-grow:1;flex-basis:0;word-break:break-word;overflow-wrap:break-word;margin:0 16px}.template4 h4{font-size:23px;text-align:center}.template4>div:first-child h4{color:#274323;border-bottom:3px solid #274323;border-collapse:separate;border-spacing:50px;margin:16px 16px 24px 0}.template4>div:nth-child(2) h4{color:#b02e2e;border-bottom:3px solid #b02e2e;margin:16px 0 24px 16px}.template4>div:first-child h5{color:#274323;margin:0}.template4>div:nth-child(2) h5{color:#b02e2e}.template4 ul li{margin:24px 0}.template4 ul{list-style:none;padding-left:0}\n",
        TemplateImg: "../images/box-template4.jpg",
    },
    {
        id: 5,
        name: "bloque-con-google-maps",
        type: "box",
        TemplateHtml: `<!-- wp:columns {"className":"template5"} -->
        <div class="wp-block-columns template5"><!-- wp:column -->
        <div class="wp-block-column"><!-- wp:table -->
        <figure class="wp-block-table"><table><tbody><tr><td class="has-text-align-left" data-align="left"><strong>Título de Ejemplo</strong></td></tr><tr><td class="has-text-align-left" data-align="left">» <strong>Característica</strong>: Detalle</td></tr><tr><td class="has-text-align-left" data-align="left">» <strong>Característica</strong>: Detalle</td></tr><tr><td class="has-text-align-left" data-align="left">» <strong>Característica</strong>: Detalle</td></tr><tr><td class="has-text-align-left" data-align="left">» <strong>Característica</strong>: Detalle</td></tr><tr><td class="has-text-align-left" data-align="left"><a href="https://bloques-gutenberg.com" target="_blank" rel="noreferrer noopener">Solicitar</a></td></tr></tbody></table></figure>
        <!-- /wp:table --></div>
        <!-- /wp:column -->
        
        <!-- wp:column -->
        <div class="wp-block-column"><!-- wp:table -->
        <figure class="wp-block-table"><table><tbody><tr><td class="has-text-align-center" data-align="center"><strong>Google Maps</strong></td></tr><tr><td class="has-text-align-center" data-align="center"><img class="wp-image-1540" style="width: 350px;" src="https://bg.manu-scholz.com/wp-content/uploads/2021/06/mapexample.jpg" alt=""></td></tr></tbody></table></figure>
        <!-- /wp:table --></div>
        <!-- /wp:column --></div>
        <!-- /wp:columns -->
        `,
        TemplateCss: ".template5>div figure{margin:3px;}.template5 table tr td{border:0;}.template5>div:first-child tr:first-child td{font-size:26px;line-height:2.3;text-align:center;}.template5>div:first-child tr td{font-size:17px;line-height:2}.template5>div:first-child tr:last-child td a{margin:16px auto;border:1px solid #000;text-decoration:none;font-size:20px;text-align:center;line-height:3}.template5>div:first-child tr:last-child td{text-align:center;}.template5>div:nth-child(2) figure table tbody tr td img{width:100%!important;max-height:300px;margin:8px 0}@media(max-width:768px){.template5>div:first-child tr:first-child td{font-size:26px;line-height:1.7;text-align:center}.template5>div:first-child tr td{font-size:16px;line-height:2;text-align:center;}.template5>div:nth-child(2) figure table tbody tr td img{width:50%;!important}}@media(max-width:480px){.template5 > div:nth-child(2) figure table tbody tr td img{width:95%!important;}} \n",
        TemplateImg: "../images/box-template5.jpg"
    },
    {
        id: 12,
        name: "comparativa-de-tres-productos",
        type: "table",
        TemplateHtml: `<!-- wp:columns {"className":"template12"} -->
        <div class="wp-block-columns template12"><!-- wp:column -->
        <div class="wp-block-column"><!-- wp:table -->
        <figure class="wp-block-table"><table><tbody><tr><td class="has-text-align-center" data-align="center">Camiseta S</td></tr><tr><td class="has-text-align-center" data-align="center"><img src="https://bg.manu-scholz.com/wp-content/uploads/2021/06/shirt.png" alt=""></td></tr><tr><td class="has-text-align-center" data-align="center"><img class="wp-image-99" style="width: 128px;" src="https://bg.manu-scholz.com/wp-content/uploads/2021/06/rating-3_prueba-removebg-preview.png" alt=""></td></tr><tr><td class="has-text-align-center" data-align="center">Tela</td></tr><tr><td class="has-text-align-center" data-align="center">67 x 115 x 107 cm</td></tr><tr><td class="has-text-align-center" data-align="center">25.4 kg</td></tr><tr><td class="has-text-align-center" data-align="center">15€</td></tr><tr><td class="has-text-align-center" data-align="center"><a href="https://bloques-gutenberg.com" target="_blank" rel="noreferrer noopener">Comprar</a></td></tr></tbody></table></figure>
        <!-- /wp:table --></div>
        <!-- /wp:column -->
        
        <!-- wp:column -->
        <div class="wp-block-column"><!-- wp:table -->
        <figure class="wp-block-table"><table><tbody><tr><td class="has-text-align-center" data-align="center">Camiseta M</td></tr><tr><td class="has-text-align-center" data-align="center"><img src="https://bg.manu-scholz.com/wp-content/uploads/2021/06/shirt.png" alt=""></td></tr><tr><td class="has-text-align-center" data-align="center"><img class="wp-image-99" style="width: 128px;" src="https://bg.manu-scholz.com/wp-content/uploads/2021/06/rating-3_prueba-removebg-preview.png" alt=""></td></tr><tr><td class="has-text-align-center" data-align="center">Lana</td></tr><tr><td class="has-text-align-center" data-align="center">67 x 115 x 107 cm</td></tr><tr><td class="has-text-align-center" data-align="center">25.4 kg</td></tr><tr><td class="has-text-align-center" data-align="center">25€</td></tr><tr><td class="has-text-align-center" data-align="center"><a rel="noreferrer noopener" href="https://bloques-gutenberg.com" target="_blank">Comprar</a></td></tr></tbody></table></figure>
        <!-- /wp:table --></div>
        <!-- /wp:column -->
        
        <!-- wp:column -->
        <div class="wp-block-column"><!-- wp:table -->
        <figure class="wp-block-table"><table><tbody><tr><td class="has-text-align-center" data-align="center">Camiseta L</td></tr><tr><td class="has-text-align-center" data-align="center"><img class="wp-image-40" style="width: px;" src="https://bg.manu-scholz.com/wp-content/uploads/2021/06/shirt.png" alt=""></td></tr><tr><td class="has-text-align-center" data-align="center"><img class="wp-image-99" style="width: 128px;" src="https://bg.manu-scholz.com/wp-content/uploads/2021/06/rating-3_prueba-removebg-preview.png" alt=""></td></tr><tr><td class="has-text-align-center" data-align="center">Lino</td></tr><tr><td class="has-text-align-center" data-align="center">67 x 115 x 107 cm</td></tr><tr><td class="has-text-align-center" data-align="center">25.4 kg</td></tr><tr><td class="has-text-align-center" data-align="center">30€</td></tr><tr><td class="has-text-align-center" data-align="center"><a rel="noreferrer noopener" href="https://bloques-gutenberg.com" target="_blank">Comprar</a></td></tr></tbody></table></figure>
        <!-- /wp:table --></div>
        <!-- /wp:column --></div>
        <!-- /wp:columns -->`,
        TemplateCss: ".template12{padding:16px 0;margin:8px auto}.template12 div{width:100%;margin:0 auto}.template12 div figure{width:100%;overflow-x:hidden;min-width:210px;margin:0;}.template12 div figure table{min-width:210px}@media(max-width:768px){.template12 div figure{width:100%}}.template12 table{border-collapse:collapse}.template12 table tr:first-child td{font-weight:700}.template12 table tr td{border:0;font-size:20px;line-height:1.5}.template12 table tr:nth-last-child(2) td{font-size:36px;font-weight:700}.template12 table tr:last-child td a{border:1px solid #000;margin:5px auto;font-weight:700;font-size:20px;text-decoration:none;line-height:3;}\n",
        TemplateImg: "../images/table-template12.jpg"
    },
    {
        id: 10,
        name: "amazon-vertical",
        type: "table",
        TemplateHtml: `<!-- wp:table {"className":"template10"} -->
        <figure class="wp-block-table template10"><table><tbody><tr><td class="has-text-align-center" data-align="center">Título de Ejemplo</td></tr><tr><td class="has-text-align-center" data-align="center">Subtitulo</td></tr><tr><td class="has-text-align-center" data-align="center">45€</td></tr><tr><td class="has-text-align-center" data-align="center">Característica de ejemplo 1</td></tr><tr><td class="has-text-align-center" data-align="center">Característica de ejemplo 2</td></tr><tr><td class="has-text-align-center" data-align="center">Característica de ejemplo 3</td></tr><tr><td class="has-text-align-center" data-align="center"><a href="https://bloques-gutenberg.com">Comprar</a></td></tr></tbody></table></figure>
        <!-- /wp:table -->`,
        TemplateCss: ".template10{margin:16px auto;}.template10 table{width:100%;border-collapse:collapse;text-align:center}.template10 table tr td{border:0;}.template10 tbody>tr:first-child td{line-height:2;color:#000;border:1px dashed #000;font-size:22px}.template10 tbody>tr:nth-child(2) td{line-height:2;}.template10 tbody>tr:nth-child(3) td{font-size:54px;font-weight:700;line-height:1.7}.template10 tbody>tr:nth-child(n+4) td{font-weight:700;line-height:1.2}.template10 tbody>tr:last-child td a{border:1px solid #000;font-weight:700;font-size:20px;text-decoration:none;line-height:3.5;}@media(max-width:768px){.template10{width:95%;}}\n",
        TemplateImg: "../images/table-template10.jpg",
    },
    {
        id: 11,
        name: "caja-oferta",
        type: "table",
        TemplateHtml: `<!-- wp:table {"className":"template11"} -->
        <figure class="wp-block-table template11"><table><tbody><tr><td class="has-text-align-center" data-align="center"><img src="https://bg.manu-scholz.com/wp-content/uploads/2021/06/shirt.png" alt="" style="width: 150px;"></td></tr><tr><td class="has-text-align-center" data-align="center">Título de Ejemplo</td></tr><tr><td class="has-text-align-center" data-align="center"><img class="wp-image-819" style="width: 128px;" src="https://bg.manu-scholz.com/wp-content/uploads/2021/06/rating-3_prueba-removebg-preview.png" alt=""></td></tr><tr><td class="has-text-align-center" data-align="center"><a href="https://bloques-gutenberg.com">Comprar</a></td></tr></tbody></table></figure>
        <!-- /wp:table -->`,
        TemplateCss: ".template11{width:30%;padding:8px;margin:8px auto;}.template11 table{border-collapse:collapse;}.template11 table tr td{border:0;}.template11 table tr{line-height:1.5;}.template11 table tr:nth-child(2) td{font-size:24px}.template11 table tr:last-child td a{margin:0 auto;text-decoration: none;font-size:20px;line-height:3;}@media(max-width:768px){.template11{width:95%;}}\n",
        TemplateImg: "../images/table-template11.jpg",
    },
    {
        id: 6,
        name: "amazon-vertical-con-imagen",
        type: "table",
        TemplateHtml: `<!-- wp:table {"className":"template6"} -->
        <figure class="wp-block-table template6"><table><tbody><tr><td class="has-text-align-center" data-align="center">Camiseta de Bloques Gutenberg</td></tr><tr><td class="has-text-align-center" data-align="center"><img class="wp-image-1543" style="width: 300px;" src="https://bg.manu-scholz.com/wp-content/uploads/2021/06/shirt.png" alt="ver el secreto de feriha en español"></td></tr><tr><td class="has-text-align-center" data-align="center">49€</td></tr><tr><td class="has-text-align-center" data-align="center">Característica del Producto 1</td></tr><tr><td class="has-text-align-center" data-align="center">Característica del Producto 2</td></tr><tr><td class="has-text-align-center" data-align="center">Característica del Producto 3</td></tr><tr><td class="has-text-align-center" data-align="center"><a href="https://bloques-gutenberg.com" target="_blank" rel="noreferrer noopener">Comprar</a></td></tr></tbody></table></figure>
        <!-- /wp:table -->
        `,
        TemplateCss: ".template6{width:32%;margin:16px auto;padding:16px}.template6 table{border-collapse:collapse;text-align:center}.template6 tbody>tr td{border:0!important}.template6 tbody>tr:first-child td{font-size:32px;line-height:1.2}.template6 tbody>tr:nth-child(2) td img{width:85%!important;max-height:300px;margin:8px 0}.template6 tbody>tr:nth-child(3) td{font-size:42px}.template6 tbody>tr:nth-child(n+4) td{font-weight:700;line-height:1.2;font-size:19px}.template6 tbody>tr:last-child td a{border:1px solid #000;text-decoration:none;font-size:20px;text-align:center;line-height:3;}@media(max-width:768px){.template6{width:95%;padding:8px}}\n",
        TemplateImg: "../images/table-template6.jpg"
    },
    {
        id: 13,
        name: "caracteristicas-con-3-imagenes",
        type: "box",
        TemplateHtml:`<!-- wp:columns {"className":"template13"} -->
        <div class="wp-block-columns template13"><!-- wp:column -->
        <div class="wp-block-column"><!-- wp:table -->
        <figure class="wp-block-table"><table><tbody><tr><td class="has-text-align-center" data-align="center"><img class="wp-image-205" style="width: 70px;" src="https://bg.manu-scholz.com/wp-content/uploads/2021/06/caracteristica2.png" alt=""></td></tr><tr><td class="has-text-align-center" data-align="center">Característica 1</td></tr><tr><td class="has-text-align-center" data-align="center">Descripción elaborada de la característica 1</td></tr></tbody></table></figure>
        <!-- /wp:table --></div>
        <!-- /wp:column -->
        
        <!-- wp:column -->
        <div class="wp-block-column"><!-- wp:table -->
        <figure class="wp-block-table"><table><tbody><tr><td class="has-text-align-center" data-align="center"><img class="wp-image-206" style="width: 70px;" src="https://bg.manu-scholz.com/wp-content/uploads/2021/06/caracteristica1.png" alt=""></td></tr><tr><td class="has-text-align-center" data-align="center">Característica 2</td></tr><tr><td class="has-text-align-center" data-align="center">Descripción elaborada de la característica 2</td></tr></tbody></table></figure>
        <!-- /wp:table --></div>
        <!-- /wp:column -->
        
        <!-- wp:column -->
        <div class="wp-block-column"><!-- wp:table -->
        <figure class="wp-block-table"><table><tbody><tr><td class="has-text-align-center" data-align="center"><img class="wp-image-204" style="width: 70px;" src="https://bg.manu-scholz.com/wp-content/uploads/2021/06/caracteristica3.png" alt=""></td></tr><tr><td class="has-text-align-center" data-align="center">Característica 3</td></tr><tr><td class="has-text-align-center" data-align="center">Descripción elaborada de la característica 3</td></tr></tbody></table></figure>
        <!-- /wp:table --></div>
        <!-- /wp:column --></div>
        <!-- /wp:columns -->
        `,
        TemplateCss: ".template13>div figure{margin:3px;}.template13{padding:4px 8px}.template13 table tr td{border:0}.template13>div tr:nth-child(2) td:after{display:block;content:\"\"\;width:30%;margin:8px auto;border-top:1px solid gray}.template13>div tr:nth-child(3) td{font-size:14px}.entry-content>:not(.alignwide):not(.alignfull):not(.alignleft):not(.alignright):not(.wp-block-separator):not(.woocommerce){max-width:65%}@media(max-width:768px){.entry-content>:not(.alignwide):not(.alignfull):not(.alignleft):not(.alignright):not(.wp-block-separator):not(.woocommerce){max-width:95%}}\n",
        TemplateImg: "../images/box-template13.jpg"

    }
]

export default Templates