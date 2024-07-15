from django.shortcuts import render, redirect
from django.contrib import messages
from .models import Cliente


def index(request):
    context = {}
    return render(request, "pages/index.html", context)

def autorMes(request):
    context = {}
    return render(request, "pages/autorMes.html", context)

def cambioclimatico(request):
    context = {}
    return render(request, "pages/cambioclimatico.html", context)

def comicmanga(request):
    context = {}
    return render(request, "pages/comicmanga.html", context)

def descuentos(request):
    context = {}
    return render(request, "pages/descuentos.html", context)

def destacado(request):
    context = {}
    return render(request, "pages/destacado.html", context)

def harryPotter(request):
    context = {}
    return render(request, "pages/harryPotter.html", context)

def index2(request):
    context = {}
    return render(request, "pages/index2.html", context)

def literatura(request):
    context = {}
    return render(request, "pages/literatura.html", context)

def novelaholocausto(request):
    context = {}
    return render(request, "pages/novelaholocausto.html", context)

def promocionesEscolares(request):
    context = {}
    return render(request, "pages/promocionesEscolares.html", context)

def tematicasaga(request):
    context = {}
    return render(request, "pages/tematicasaga.html", context)

def diseño(request):
    context = {}
    return render(request, "static/diseño.css", context)

def envio(request):
    context = {}
    return render(request, "imagenes/envio.img", context)

def tematicas(request):
    context = {}
    return render(request, "imagenes/tematicas.img", context)

def imgn(request):
    context = {}
    return render(request, "imagenes/imgn.img", context)

def dsdo(request):
    context = {}
    return render(request, "imagenes/dsdo.img", context)

def imgAutorMes(request):
    context = {}
    return render(request, "imagenes/imgAutorMes.img", context)

def app(request):
    context = {}
    return render(request, "js/app.js", context)


def inicioCliente(request):
    if request.method == 'POST':
        if 'login' in request.POST:
            email = request.POST['Email']
            password = request.POST['Password']
            try:
                user = Cliente.objects.get(email=email, password=password)
                if user.run.startswith('root'):
                    return redirect('administrador')  
                else:
                    messages.success(request, 'Inicio de sesión exitoso')
                    return redirect('index')  
            except Cliente.DoesNotExist:
                messages.error(request, 'Credenciales inválidas')

        elif 'register' in request.POST:
            nombres = request.POST['Nombres']
            password = request.POST['Password']
            email = request.POST['Email']
            run = request.POST['Run']
            direccion = request.POST.get('Direccion', '')

            Cliente.objects.create(
                nombres=nombres,
                password=password,
                email=email,
                run=run,
                direccion=direccion
            )
            messages.success(request, 'Registro exitoso. Por favor, inicia sesión.')
            return redirect('inicioCliente')  

    return render(request, 'pages/inicioCliente.html')



def administrador(request):
    
    if request.user.is_authenticated and request.user.username.startswith('root'):
        return render(request, "pages/administrador.html")
    else:
        return redirect('index')
    
   

