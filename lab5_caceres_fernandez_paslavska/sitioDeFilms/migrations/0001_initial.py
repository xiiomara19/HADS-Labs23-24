# Generated by Django 5.0.3 on 2024-03-28 14:29

import django.db.models.deletion
from django.conf import settings
from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.CreateModel(
            name='Pelicula',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=100)),
                ('director', models.CharField(max_length=60)),
                ('year', models.IntegerField()),
                ('genero', models.CharField(max_length=2)),
                ('sinopsis', models.CharField(max_length=500)),
                ('votos', models.IntegerField()),
            ],
        ),
        migrations.CreateModel(
            name='PeliculasVotante',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('usuario', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
                ('votos', models.ManyToManyField(to='sitioDeFilms.pelicula')),
            ],
        ),
    ]