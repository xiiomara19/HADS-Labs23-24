from django.contrib.auth.models import User
from django.db import models


class Pelicula(models.Model):
   # id = models.AutoField(primary_key=True)
    title = models.CharField(max_length=100)
    director = models.CharField(max_length=60)
    year = models.IntegerField()
    genero = models.CharField(max_length=2)
    sinopsis = models.CharField(max_length=500)
    votos = models.IntegerField()


    def __str__(self):
        return self.title

class PeliculasVotante(models.Model):
    #id = models.AutoField(primary_key=True)
    usuario = models.ForeignKey(User, on_delete=models.CASCADE)
    votos = models.ManyToManyField(Pelicula)

'''
class authUser(models.Model):
    id = models.AutoField(primary_key=True)
    username = models.CharField(max_length=30)
    first_name = models.CharField(max_length=30)
    last_name = models.CharField(max_length=30)
    email = models.CharField(max_length=75)
    password = models.CharField(max_length=128)
    is_staff = models.BooleanField(default=False)
    is_active = models.BooleanField(default=False)
    is_superuser = models.BooleanField(default=False)
    last_login = models.DateTimeField()
    date_joined = models.DateTimeField()

    def __str__(self):
        return self.username

'''