from django.urls import path
from . import views

urlpatterns = [
   path("",views.index, name="index"),
   path("autorMes",views.autorMes, name="autorMes"),
   path("cambioclimatico",views.cambioclimatico, name="cambioclimatico"),
   path("comicmanga",views.comicmanga, name="comicmanga"),
   path("descuentos",views.descuentos, name="descuentos"),
   path("destacado",views.destacado, name="destacado"),
   path("harryPotter",views.harryPotter, name="harryPotter"),
   path("index2",views.index2, name="index2"),
   path("literatura",views.literatura, name="literatura"),
   path("novelaholocausto",views.novelaholocausto, name="novelaholocausto"),
   path("promocionesEscolares",views.promocionesEscolares, name="promocionesEscolares"),
   path("tematicasaga",views.tematicasaga, name="tematicasaga"),
   path("",views.diseño, name="diseño"),
   path("",views.envio, name="envio"),
   path("",views.tematicas, name="tematicas"),
   path("",views.imgn, name="imgn"),
   path("",views.dsdo, name="dsdo"),
   path("",views.imgAutorMes, name="imgAutorMes"),
   path("",views.app, name="app"),
   path("",views.administrador, name="administrador.html"),
   path("inicioadmi",views.inicioadmin, name="inicioadmin.html"),
   path("iniciocliente",views.iniciocliente, name="iniciocliente.html")
   
   
   
   


]
