from django.urls import path
from . import views

urlpatterns = [
   path("",views.index, name="index"),
   path("autorMes",views.autorMes, name="autorMes"),
   path("cambioClimatico",views.cambioclimatico, name="cambioclimatico"),
   path("comicManga",views.comicmanga, name="comicmanga"),
   path("descuentos",views.descuentos, name="descuentos"),
   path("destacado",views.destacado, name="destacado"),
   path("harryPotter",views.harryPotter, name="harryPotter"),
   path("",views.index2, name="index2"),
   path("literatura",views.literatura, name="literatura"),
   path("novelaHolocausto",views.novelaholocausto, name="novelaholocausto"),
   path("promocionesEscolares",views.promocionesEscolares, name="promocionesEscolares"),
   path("tematicaSaga",views.tematicasaga, name="tematicasaga"),
   path("",views.diseño, name="diseño"),
   path("",views.envio, name="envio"),
   path("",views.tematicas, name="tematicas"),
   path("",views.imgn, name="imgn"),
   path("",views.dsdo, name="dsdo"),
   path("",views.imgAutorMes, name="imgAutorMes"),
   path("",views.app, name="app")



]
