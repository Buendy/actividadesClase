### CSS display: inline-block
------------

- **`display: inline; display: inline-block; display: inline;`**
	- **`inline-block`**: Respeta los márgenes / rellenos superiores e inferiores se respetan.
	**`block`**: A diferencia de inline-block este no agrega saltod e línea.

##### EJemplo:
```css
span.a{
	display:inline;
	width:100px;
	height:100px;
	padding:5px;
	border:1px solid blue;
	background-color:yellow;
}
```

### Diseño CSS - Desbordamiento
------------
**`overflow`** controla lo que sucede con el contenido que es más grande que un área.
**Solo funciona para elementos con una altura especificada.**
Valores o propiedades:
- **`visible`**: El desbordamiento no se recorta.
- **`hidden`**: El desbordamiento se recorta ocultando el resto del contenido.
- **`scroll`**: El desbordamiento se recorta añadiendo una barra de desplazamiento.
- **`auto`**: Si se recorta el desbordamiento agregará una barra de desplazamiento.

##### EJemplo:
```css
div{
	width:200px;
	height:50px;
	background-color:#eee;
	overflow:visible;
}

```

### Ancho / máximo y position
------------
Con **`widht`** indicamos que el elemento no ocupe toda la pantalla y **`max-width`** ocupará el tamaño especificado como máximo toda la pantalla pero se ajustará a ella.

##### Ejemplos:
```css
div.ex1
	width:500px;
	margin:auto;
	border:3px solid #73AD21;
}
```
```css
div.ex2{
	max-width:500px;
	margin:auto;
	border:3px solid #73AD21;
}
```
#### Propiedad de posición
Con **`position`** especificamos el tipo de posicionamiento utilizado en un elemento.
- **`static`**: Los elementos se posicionan estáticamente. (por defecto tienen esta posición y no se ven afectados por las propiedades superior, inferior, izquierda, y derecha).
- **`relative`**: Se coloca en relación con su posición normal (las propiedades superior, inferior, izquierda, y derecha se pueden ajustar).
- **`fixed`**: Se posiciona en relación con la ventana gráfica (este no deja espacios donde normalmente se habría ubicado).
- **`absolute`**: Se posiciona con relación al antepasado posicionado más cercano.
- **`sticky`**: Se posiciona en función de la posición de desplazamiento del usuario.

##### Ejemplos:
```css
div.ex1{
	width:500px;
	margin:auto;
	border:3px solid #73AD21;
}
```

```css
div.ex2{
	max-width:500px;
	margin:auto;
	border:3px solid #73AD21;
}
```
```css
div.relative{
	position:relative;
	left:30px;
	border:3px solid #73AD21;
}
```
```css
div.static{
	position:static;
	border:3px solid #73AD21;
}
```
```css
div.fixed{
	position:fixed;
	bottom:0;
	right:0;
	width:300px;
	border:3px solid #73AD21;
}
```
```css
div.absolute{
	position:absolute;
	top:80px;
	right:0;
	width:200px;
	height:100px;
	border:3px solid #73AD21;
}
```
```css
div.sticky{
	position:-webkit-sticky;/* Safari */
	position:sticky;
	top:0;
	background-color:green;
	border:2px solid #4CAF50;
}
```

#### Elementos superpuestos
Los elementos se pueden superponer a otros elementos.
Con **`z-index`** especificamos el orden de apilamiento (Si está detrás o delante de los demás).
Si el número de apilamiento es mayor, el elemento estará por encima.
##### Ejemplo:
```css
img{
	position:absolute;
	left:0px;
	top:0px;
	z-index:-1;
}
```
