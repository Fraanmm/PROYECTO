from django.urls import path
from . import views

urlpatterns = [
   path("",views.index, name="index"),
   path("",views.autorMes, name="autorMes"),
   path("cambioClimatico",views.cambioclimatico, name="cambioclimatico"),
   path("",views.comicmanga, name="comicmanga"),
   path("",views.descuentos, name="descuentos"),
   path("",views.destacado, name="destacado"),
   path("",views.harryPotter, name="harryPotter"),
   path("",views.index2, name="index2"),
   path("",views.literatura, name="literatura"),
   path("",views.novelaholocausto, name="novelaholocausto"),
   path("",views.promocionesEscolares, name="promocionesEscolares"),
   path("",views.tematicasaga, name="tematicasaga"),
   path("",views.diseño, name="diseño"),
   path("",views.envio, name="envio"),
   path("",views.tematicas, name="tematicas"),
   path("",views.imgn, name="imgn"),
   path("",views.dsdo, name="dsdo"),
   path("",views.imgAutorMes, name="imgAutorMes"),
   path("",views.app, name="app")



]
