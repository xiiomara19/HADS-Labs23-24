from django.shortcuts import render, redirect
from django.contrib.auth import login, authenticate, logout
from django.contrib.auth.forms import UserCreationForm
from django.contrib import messages
from django.contrib.auth.decorators import login_required
from .forms import CreateUserForm



def registerPage(request):
    if request.user.is_authenticated:
        return redirect('home')
    else:
        form = CreateUserForm()
        if request.method == 'POST':
            form = CreateUserForm(request.POST)
            if form.is_valid():
                form.save()
                user = form.cleaned_data.get('username')
                messages.success(request, 'El usuario ' + user + ' se ha registrado correctamente')
                return redirect('login')

        context = {'form': form}
        return render(request, 'register.html', context)


def loginPage(request):
    if request.user.is_authenticated:
        return redirect('home')
    else:
        if request.method == 'POST':
            username = request.POST.get('username')
            password = request.POST.get('password')

            user = authenticate(request, username=username, password=password)
            if user is not None:
                login(request, user)
                return redirect('home')
            else:
                messages.info(request, 'El usuario o contraseña son incorrectos.')

        context = {}
        return render(request, 'login.html', context)


def logoutPage(request):
    logout(request)
    return redirect('login')

@login_required(login_url='login')
def homePage(request):
    context = {}
    return render(request, 'home.html', context)

@login_required(login_url='login')
def botePage(request):
    context = {}
    return render(request, 'bote.html', context)

@login_required(login_url='login')
def botesPage(request):
    context = {}
    return render(request, 'botes.html', context)

@login_required(login_url='login')
def filmsPage(request):
    context = {}
    return render(request, 'films.html', context)

