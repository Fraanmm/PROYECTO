from django.contrib import admin
from .models import Cliente, Pago, Producto, Compras, DetalleCompras


admin.site.register(Cliente)
admin.site.register(Pago)
admin.site.register(Producto)
admin.site.register(Compras)
admin.site.register(DetalleCompras)
