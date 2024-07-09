from django.db import models

class Cliente(models.Model):
    run = models.CharField(max_length=9, unique=True)
    nombres = models.CharField(max_length=255)
    direccion = models.CharField(max_length=255, null=True, blank=True)
    email = models.EmailField(unique=True)
    password = models.CharField(max_length=255)

class Pago(models.Model):
    monto = models.DecimalField(max_digits=10, decimal_places=2)

class Producto(models.Model):
    nombres = models.CharField(max_length=255)
    foto = models.ImageField(upload_to='productos/')
    descripcion = models.TextField(null=True, blank=True)
    precio = models.DecimalField(max_digits=10, decimal_places=2)
    stock = models.PositiveIntegerField()

class Compras(models.Model):
    cliente = models.ForeignKey(Cliente, on_delete=models.CASCADE)
    pago = models.ForeignKey(Pago, on_delete=models.CASCADE)
    fecha_compras = models.DateField()
    monto = models.DecimalField(max_digits=10, decimal_places=2)
    estado = models.CharField(max_length=50, null=True, blank=True)

class DetalleCompras(models.Model):
    producto = models.ForeignKey(Producto, on_delete=models.CASCADE)
    compras = models.ForeignKey(Compras, on_delete=models.CASCADE)
    cantidad = models.PositiveIntegerField()
    precio_compra = models.DecimalField(max_digits=10, decimal_places=2)
