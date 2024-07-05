from django import forms
from django.contrib.auth.forms import UserCreationForm, AuthenticationForm
from django.core.exceptions import ValidationError
from django.utils.translation import gettext_lazy as _
from .models import CustomUser

class RegistroUsuarioForm(UserCreationForm):
    password = forms.CharField(label=_('Contraseña'), widget=forms.PasswordInput)
    confirm_password = forms.CharField(label=_('Confirmar Contraseña'), widget=forms.PasswordInput)

    genero_choices = [
        ('Hombre', 'Hombre'),
        ('Mujer', 'Mujer'),
        ('Otro', 'Otro')
    ]
    genero = forms.ChoiceField(label=_('Género'), choices=genero_choices)

    class Meta:
        model = CustomUser
        fields = ['nombre', 'apellido', 'email', 'genero', 'password', 'confirm_password']

    def clean_email(self):
        email = self.cleaned_data['email']
        if not (email.endswith('@duocuc.cl') or email.endswith('@gmail.com') or email.endswith('@hotmail.com')):
            raise ValidationError(_('El correo electrónico debe ser de Duoc UC, Gmail o Hotmail.'))
        return email

    def clean(self):
        cleaned_data = super().clean()
        password = cleaned_data.get('password')
        confirm_password = cleaned_data.get('confirm_password')
        if password and confirm_password and password != confirm_password:
            raise ValidationError(_('Las contraseñas no coinciden.'))
        return cleaned_data

class LoginForm(AuthenticationForm):
    username = forms.EmailField(label=_('Correo electrónico'))
    password = forms.CharField(label=_('Contraseña'), widget=forms.PasswordInput)