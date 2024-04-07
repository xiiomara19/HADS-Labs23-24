from django.shortcuts import render, redirect
from django.contrib.auth import login, authenticate, logout
from django.contrib.auth.forms import UserCreationForm
from django.contrib import messages
from django.contrib.auth.decorators import login_required
from .forms import CreateUserForm
from .models import *


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
def votePage(request):
    if request.method == "GET":
        films = Pelicula.objects.all()
        return render(request, 'vote.html', {'Pelicula': films})
    if 'vote' in request.POST:
        # Coger la pelicula
        films = Pelicula.objects.all()
        film = request.POST.get('film', False)
        selected_film = Pelicula.objects.get(title=film)
        # Agregar un voto a la pelicula y guardar
        uId = request.user.id
        usuario, created = PeliculasVotante.objects.get_or_create(usuario_id=uId)
        if selected_film in usuario.votos.all():
            messages.error(request, "Ya votaste esta película")
            return render(request, 'vote.html', {'Pelicula': films})
        else:
            selected_film.votos += 1
            selected_film.save()
            usuario.votos.add(selected_film)
            usuario.save()
            whoVote_list = selected_film.get_whoVote_list()
            whoVote_list.append(request.user.username)
            selected_film.whoVote = ','.join(whoVote_list)
            selected_film.save()
            messages.success(request, "La votación se ha completado." + " Votaste por la película." + selected_film.title)
            return render(request, 'vote.html', {'Pelicula': films})

@login_required(login_url='login')
def votesPage(request):
    if request.method == "GET":
        films = Pelicula.objects.all()
        return render(request, 'votes.html', {'Pelicula': films})
    if 'vote' in request.POST:
        # Coger la pelicula y obtener la lista de los votantes
        films = Pelicula.objects.all()
        film = request.POST.get('film', False)
        selected_film = Pelicula.objects.get(title=film)
        if selected_film.votos == 0:
            messages.error(request, "No hay votantes para la película "+selected_film.title)
            return render(request, 'votes.html', {'Pelicula': films})
        whoVote_list = selected_film.get_whoVote_list()
        messages.success(request, "Los votantes de la película " + selected_film.title + " son: ")
        return render(request, 'votes.html', {'Votantes': whoVote_list, 'Pelicula': films})

@login_required(login_url='login')
def filmsPage(request):
    films = Pelicula.objects.all()
    return render(request, 'films.html', {'films': films})

