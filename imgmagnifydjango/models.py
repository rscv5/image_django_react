from django.db import models

# Create your models here.
class ImageInfo(models.Model):
  image = models.FileField(upload_to="photos/", blank=True)

  def __str__(self):
    return self.image