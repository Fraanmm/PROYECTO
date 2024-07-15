# Generated by Django 5.0.6 on 2024-07-15 02:11

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('LibFMN', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Cliente',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('run', models.CharField(max_length=9, unique=True)),
                ('nombres', models.CharField(max_length=255)),
                ('direccion', models.CharField(blank=True, max_length=255, null=True)),
                ('email', models.EmailField(max_length=254, unique=True)),
                ('password', models.CharField(max_length=255)),
            ],
        ),
        migrations.CreateModel(
            name='Compras',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('fecha_compras', models.DateField()),
                ('monto', models.DecimalField(decimal_places=2, max_digits=10)),
                ('estado', models.CharField(blank=True, max_length=50, null=True)),
                ('cliente', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='LibFMN.cliente')),
            ],
        ),
        migrations.CreateModel(
            name='DetalleCompras',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('cantidad', models.PositiveIntegerField()),
                ('precio_compra', models.DecimalField(decimal_places=2, max_digits=10)),
                ('compras', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='LibFMN.compras')),
            ],
        ),
        migrations.CreateModel(
            name='Pago',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('monto', models.DecimalField(decimal_places=2, max_digits=10)),
            ],
        ),
        migrations.CreateModel(
            name='Producto',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('nombres', models.CharField(max_length=255)),
                ('foto', models.ImageField(upload_to='productos/')),
                ('descripcion', models.TextField(blank=True, null=True)),
                ('precio', models.DecimalField(decimal_places=2, max_digits=10)),
                ('stock', models.PositiveIntegerField()),
            ],
        ),
        migrations.DeleteModel(
            name='CustomUser',
        ),
        migrations.AddField(
            model_name='compras',
            name='pago',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='LibFMN.pago'),
        ),
        migrations.AddField(
            model_name='detallecompras',
            name='producto',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='LibFMN.producto'),
        ),
    ]