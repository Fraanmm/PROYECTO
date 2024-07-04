from django import forms
from django.contrib.auth.models import User
from django.core.exceptions import ValidationError
from django.utils.translation import gettext_lazy as _  # Importa el atajo `_` para traducción

class LoginForm(forms.Form):
    username = forms.CharField(label=_('Nombre de usuario'))  # Usa el atajo _ para traducir la etiqueta
    password = forms.CharField(label=_('Contraseña'), widget=forms.PasswordInput)


class RegistroForm(forms.ModelForm):
    password = forms.CharField(label=_('Contraseña'), widget=forms.PasswordInput)
    confirm_password = forms.CharField(label=_('Confirmar contraseña'), widget=forms.PasswordInput)

    class Meta:
        model = User
        fields = ['username', 'email', 'password']

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
