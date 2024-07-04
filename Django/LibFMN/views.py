from django.shortcuts import render
"""  """
from django.shortcuts import render, redirect
from django.contrib.auth.models import User
from django.contrib import messages
from django.contrib.auth import authenticate, login
from .forms import LoginForm, RegistroForm

# Create your views here.
def index(request):
    context ={

    }
    return render(request,"pages/index.html",context)

def autorMes(request):
    context ={

    }
    return render(request,"pages/autorMes.html",context)

def cambioclimatico(request):
    context ={

    }
    return render(request,"pages/cambioclimatico.html",context)

def comicmanga(request):
    context ={

    }
    return render(request,"pages/comicmanga.html",context)

def descuentos(request):
    context ={

    }
    return render(request,"pages/descuentos.html",context)

def destacado(request):
    context ={

    }
    return render(request,"pages/destacado.html",context)

def harryPotter(request):
    context ={

    }
    return render(request,"pages/harryPotter.html",context)

def index2(request):
    context ={

    }
    return render(request,"pages/index2.html",context)

def literatura(request):
    context ={

    }
    return render(request,"pages/literatura.html",context)

def novelaholocausto(request):
    context ={

    }
    return render(request,"pages/novelaholocausto.html",context)

def promocionesEscolares(request):
    context ={

    }
    return render(request,"pages/promocionesEscolares.html",context)

def tematicasaga(request):
    context ={

    }
    return render(request,"pages/tematicasaga.html",context)

def diseño(request):
    context ={

    }
    return render(request,"static/diseño.css",context)

def envio(request):
    context ={

    }
    return render(request,"imagenes/envio.img",context)

def tematicas(request):
    context ={

    }
    return render(request,"imagenes/tematicas.img",context)

def imgn(request):
    context ={

    }
    return render(request,"imagenes/imgn.img",context)

def dsdo(request):
    context ={

    }
    return render(request,"imagenes/dsdo.img",context)

def imgAutorMes(request):
    context ={

    }
    return render(request,"imagenes/imgAutorMes.img",context)

def app(request):
    context ={

    }
    return render(request,"js/app.js",context)



def inicioadmin(request):
    if request.method == 'POST':
        # Procesar formulario de inicio de sesión
        if 'login_form' in request.POST:
            login_form = LoginForm(request.POST)
            if login_form.is_valid():
                username = login_form.cleaned_data['username']
                password = login_form.cleaned_data['password']
                user = authenticate(username=username, password=password)
                if user is not None:
                    login(request, user)
                    return redirect('administrador.html')
                else:
                    messages.error(request, 'Usuario o contraseña incorrectos.')
        else:
            login_form = LoginForm(request.POST)
        
        # Procesar formulario de registro
        if 'registro_form' in request.POST:
            registro_form = RegistroForm(request.POST)
            if registro_form.is_valid():
                username = registro_form.cleaned_data['username']
                email = registro_form.cleaned_data['email']
                password = registro_form.cleaned_data['password']
                
                if not (email.endswith('@duocuc.cl') or email.endswith('@gmail.com') or email.endswith('@hotmail.com')):
                    messages.error(request, 'El correo electrónico debe ser de Duoc UC, Gmail o Hotmail.')
                else:
                    new_user = User.objects.create_user(username=username, email=email, password=password)
                    new_user.save()
                    messages.success(request, 'Usuario creado correctamente.')
                    return redirect('inicioadmin')
        else:
            registro_form = RegistroForm(request.POST)

    else:
        login_form = LoginForm()
        registro_form = RegistroForm()

    context = {
        'login_form': login_form,
        'registro_form': registro_form,
    }
    return render(request, 'pages/inicioadmin.html', context)


def administrador(request):
    context ={

    }
    return render(request,"pages/administrador.html",context)

def iniciocliente(request):
    context ={

    }
    return render(request,"pages/iniciocliente.html",context)

"""  """


