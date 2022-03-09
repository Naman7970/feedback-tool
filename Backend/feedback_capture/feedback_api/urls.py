from django.urls import path, include

from . import views


urlpatterns = [
    path('feedbacks/', views.FeedbackAPIView.as_view()),
    path('api-auth/', include('rest_framework.urls', namespace='rest_framework'))
]