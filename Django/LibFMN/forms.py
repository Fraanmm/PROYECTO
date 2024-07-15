from django import forms
from django.core.exceptions import ValidationError
from django.utils.translation import gettext_lazy as _

class LoginForm(forms.Form):
    username = forms.CharField(label=_('Correo electrónico'), max_length=100)
    password = forms.CharField(label=_('Contraseña'), widget=forms.PasswordInput)

class RegistroAdminForm(forms.Form):
    username = forms.CharField(label=_('Usuario'), max_length=100)
    email = forms.EmailField(label=_('Correo electrónico'))
    password = forms.CharField(label=_('Contraseña'), widget=forms.PasswordInput)
    confirm_password = forms.CharField(label=_('Confirmar Contraseña'), widget=forms.PasswordInput)
    rut = forms.CharField(label=_('RUT'))
    genero_choices = [
        ('Hombre', 'Hombre'),
        ('Mujer', 'Mujer'),
        ('Otro', 'Otro')
    ]
    genero = forms.ChoiceField(label=_('Género'), choices=genero_choices)

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
