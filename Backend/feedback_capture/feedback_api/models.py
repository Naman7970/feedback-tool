from django.db import models


class Feedback(models.Model):
    username = models.CharField(max_length=20)
    rating = models.IntegerField()
    review = models.TextField(max_length=50)

    def __str__(self):
        return str(self.username) + " gives " + str(self.rating) + " stars with review " + str(self.review)
