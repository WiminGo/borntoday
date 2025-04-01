from django.contrib import admin
from .models import Star
# Register your models here.
admin.site.register(Star)
#class StarAdmin(admin.ModelAdmin):
#    list_display = ('id', 'title', 'time_create', 'is_published')
#    list_display_links = ('id', 'title')
#admin.site.register(Star, StarAdmin)