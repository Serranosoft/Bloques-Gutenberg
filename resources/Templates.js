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
        TemplateCss: ".template1{display:flex;align-items:center;width:100%;background:#faf5f0;border:1px solid gray;box-shadow:0 3px 3px #611905;margin:24px auto;padding:24px 10px;text-align:center}.template1>div:first-child{flex-basis:34%!important;width:100%!important}.template1>div:first-child img{width:75%}.template1>div:nth-child(2){flex-basis:40%}.template1>div:nth-child(3){flex-basis:25%}.template1 .wp-block-column .wp-block-image{margin:16px}.wp-block-column:not(:first-child){margin-left:0}.wp-block-buttons .wp-block-button{margin:0}.template1 .wp-block-column .wp-block-buttons .wp-block-button a{padding:10px 20px;border:2px solid #000;font-size:20px;transition:1s}.template1 .wp-block-column .wp-block-buttons .wp-block-button a:hover{border:2px solid #000;transform:scale(1.10)}.template1 .wp-block-column ul li{margin:16px 0;text-align:left;font-size:18px}.template1 .wp-block-column ul li::marker{color:#172815;font-size:23px}\n",
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
        TemplateCss: ".template2{display:flex;flex-wrap:wrap;border:2px solid #34d399;padding:8px;background:#faf5f0;border:1px solid gray;box-shadow:0 3px 3px #611905}.template2 h3{margin-left:40px}@media(max-width:768px){.template2 h3{margin-left:8px}}.template2>div:first-child h3{color:#1b4d1b}.template2>div:nth-child(2) h3{color:#962424}.template2 ul{text-align:center}.template2 ul li{margin:8px 0;list-style-position:inside}\n",
        TemplateImg: "../images/box-template2.jpg",
    },
    {
        id: 3,
        name: "call-to-action",
        type: "box",
        TemplateHtml: `<!-- wp:table {"className":"template3"} -->
        <figure class="wp-block-table template3"><table><tbody><tr><td class="has-text-align-center" data-align="center">Prueba los bloques gutenberg</td></tr><tr><td class="has-text-align-center" data-align="center">Los bloques CTA (Call to Action) son perfectos para destacar información y atraer al usuario mejorando la conversión e incitando al lector en hacer clic en el contenido</td></tr><tr><td class="has-text-align-center" data-align="center"><a href="https://bloques-gutenberg.com">Utiliza bloques gutenberg</a></td></tr></tbody></table></figure>
        <!-- /wp:table -->`,
        TemplateCss: ".template3{width:100%;margin:0 auto;border:1px solid #d3d3d3;padding:8px;overflow-x:auto}.template3 table{width:100%;border-collapse:collapse}.template3 tbody>tr:first-child td{font-size:28px;line-height:2.5}@media(max-width:768px){.template3 tbody>tr:first-child td{line-height:1.5}.template3 tbody>tr:nth-child(2) td{display:block;margin:16px 0}.template3 tbody>tr:nth-child(3) td a{width:95%!important}}.template3 tbody>tr:nth-child(3) td a{display:block;width:40%;margin:18px auto;padding:10px 16px;border-radius:30px;background-color:#272c30;color:#fff;font-size:20px;text-decoration: none;}\n",
        TemplateImg: "../images/box-template3.jpg"
    },
    {
        id: 4,
        name: "ventaja-desventaja-decorada",
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
        TemplateCss: ".template4{width:100%;display:flex;flex-wrap:wrap;padding:3px 12px}.template4>div{flex-grow:1;flex-basis:0;word-break:break-word;overflow-wrap:break-word;margin:0 16px}.template4 h4{font-size:23px;text-align:center}.template4>div:first-child h4{color:#274323;border-bottom:3px solid #274323;border-collapse:separate;border-spacing:50px;margin:16px 16px 24px 0}.template4>div:nth-child(2) h4{color:#b02e2e;border-bottom:3px solid #b02e2e;margin:16px 0 24px 16px}.template4>div:first-child h5{color:#274323;margin:0}.template4>div:nth-child(2) h5{color:#b02e2e}.template4 ul li{margin:24px 0}.template4 ul{list-style:none;padding-left:0}\n",
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
        TemplateCss: ".template5{width:100%;flex-wrap:wrap;border:1px solid #d3d3d3}.template5>div:first-child tr:first-child td{font-size:28px;line-height:2.5}.template5>div:first-child tr td{font-size:18px;line-height:2.3}.template5>div:first-child tr:nth-child(6) td a{display:block;width:70%;margin:16px auto;border:1px solid #000;border-radius:7px;background-color:#272c30;color:#fff;cursor:pointer;transition:.7s;text-decoration:none;font-size:20px;text-align:center;line-height:2}.template5>div:nth-child(2) figure table tbody tr td img{width:100%!important;max-height:300px;margin:8px 0}@media(max-width:768px){.template5>div figure{margin:16px}.template5>div:first-child tr:first-child td{font-size:26px;line-height:1.7;text-align:center}.template5>div:first-child tr td{font-size:16px;line-height:2}.template5>div:nth-child(2) figure table tbody tr td img{max-height:200px}} \n",
        TemplateImg: "../images/box-template5.jpg"
    },
    {
        id: 6,
        name: "amazon-vertical-con-imagen",
        type: "table",
        TemplateHtml:`<!-- wp:table {"className":"template6"} -->
        <figure class="wp-block-table template6"><table><tbody><tr><td class="has-text-align-center" data-align="center">Camiseta de Bloques Gutenberg</td></tr><tr><td class="has-text-align-center" data-align="center"><img class="wp-image-1543" style="width: 300px;" src="https://bg.manu-scholz.com/wp-content/uploads/2021/06/shirt.png" alt="ver el secreto de feriha en español"></td></tr><tr><td class="has-text-align-center" data-align="center">49€</td></tr><tr><td class="has-text-align-center" data-align="center">Característica del Producto 1</td></tr><tr><td class="has-text-align-center" data-align="center">Característica del Producto 2</td></tr><tr><td class="has-text-align-center" data-align="center">Característica del Producto 3</td></tr><tr><td class="has-text-align-center" data-align="center"><a href="https://bloques-gutenberg.com" target="_blank" rel="noreferrer noopener">Comprar</a></td></tr></tbody></table></figure>
        <!-- /wp:table -->
        `,
        TemplateCss: ".template6{width:40%;margin:16px auto;padding:24px 24px;border:1px solid #d3d3d3}.template6 table{border-collapse:collapse;text-align:center}.template6 tbody>tr td{border:0!important}.template6 tbody>tr:first-child td{font-size:32px;line-height:1.2}.template6 tbody>tr:nth-child(2) td img{width:85%!important;max-height:300px;margin:8px 0}.template6 tbody>tr:nth-child(3) td{font-size:42px}.template6 tbody>tr:nth-child(n+4) td{font-weight:700;line-height:1.2;font-size:19px}.template6 tbody>tr:nth-child(7) td a{display:block;width:60%;margin:8px auto;border:1px solid #000;border-radius:7px;background-color:#272c30;color:#fff;cursor:pointer;transition:.7s;text-decoration:none;font-size:20px;text-align:center;line-height:2;transition:.7s}@media(max-width:768px){.template6{width:95%;padding:8px}}\n",
        TemplateImg: "../images/table-template6.jpg"
    },
    {
        id: 10,
        name: "amazon-vertical",
        type: "table",
        TemplateHtml: `<!-- wp:table {"className":"template10"} -->
        <figure class="wp-block-table template10"><table><tbody><tr><td class="has-text-align-center" data-align="center">Título de Ejemplo</td></tr><tr><td class="has-text-align-center" data-align="center">Subtitulo</td></tr><tr><td class="has-text-align-center" data-align="center">45€</td></tr><tr><td class="has-text-align-center" data-align="center">Característica de ejemplo 1</td></tr><tr><td class="has-text-align-center" data-align="center">Característica de ejemplo 2</td></tr><tr><td class="has-text-align-center" data-align="center">Característica de ejemplo 3</td></tr><tr><td class="has-text-align-center" data-align="center"><a href="https://bloques-gutenberg.com">Comprar</a></td></tr></tbody></table></figure>
        <!-- /wp:table -->`,
        TemplateCss: ".template10{width:45%;margin:16px auto;border:2px solid #000}.template10 table{width:100%;border-collapse:collapse;text-align:center}.template10 tbody>tr:first-child td{line-height:2.5;color:#000;border:1px dashed #000;font-size:22px}.template10 tbody>tr:nth-child(2) td{line-height:2.5;}.template10 tbody>tr:nth-child(3) td{font-size:54px;font-weight:700;line-height:2.5}.template10 tbody>tr:nth-child(n+4) td{font-weight:700;line-height:1.5}.template10 tbody>tr:nth-child(7) td a{width:50%;display:block;margin:18px auto;padding: 4px 24px;border:1px solid #000;border-radius:15px;margin:24px auto;color:#fff;font-weight:700;transition:.7s;font-size:20px;text-decoration:none;} \n",
        TemplateImg: "../images/table-template10.jpg",
    },
    {
        id: 11,
        name: "caja-oferta",
        type: "table",
        TemplateHtml: `<!-- wp:table {"className":"template11"} -->
        <figure class="wp-block-table template11"><table><tbody><tr><td class="has-text-align-center" data-align="center"><img src="https://www.mejor-banco.com/wp-content/uploads/2020/11/santander-cuenta-one-opiniones.png" alt="" style="width: 150px;"></td></tr><tr><td class="has-text-align-center" data-align="center">Título de Ejemplo</td></tr><tr><td class="has-text-align-center" data-align="center"><img class="wp-image-819" style="width: 128px;" src="https://huchadefinanzas.es/wp-content/uploads/2021/05/rating-3.png" alt=""></td></tr><tr><td class="has-text-align-center" data-align="center"><a href="https://bloques-gutenberg.com">Comprar</a></td></tr></tbody></table></figure>
        <!-- /wp:table -->`,
        TemplateCss: ".template11{width:33%;border:2px solid #d3d3d3;padding:8px 16px;margin:8px auto;}.template11 table{border:0;border-collapse:collapse;}.template11 table tr{line-height:2.5;}.template11 table tr:nth-child(2) td{font-size:24px}.template11 table tr:nth-child(3) td img{width:100px!important;height:90%}.template11 table tr:nth-child(4) td a{display:block;width:50%;margin:0 auto;padding:5px 24px;border:1px solid gray;border-radius:30px;background-color:#272c30;color:#fff;cursor:pointer;text-decoration: none;font-size:20px;}\n",
        TemplateImg: "../images/table-template11.jpg",
    },
]

export default Templates