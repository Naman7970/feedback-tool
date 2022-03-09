from rest_framework.views import APIView
from rest_framework.response import Response
from .serializers import FeedbackSerializer
from .models import Feedback


class FeedbackAPIView(APIView):
    serializer_class = FeedbackSerializer

    def get_queryset(self):
        feedbacks = Feedback.objects.all()
        return feedbacks

    def get(self, request, *args, **kwargs):
        feedbacks = self.get_queryset()
        serializer = FeedbackSerializer(feedbacks, many=True)

        return Response(serializer.data)

    def post(self, request, *args, **kwargs):
        feedback_data = request.data

        new_feedback = Feedback.objects.create(
            username=feedback_data["username"], rating=feedback_data["rating"], review=feedback_data["review"])
        new_feedback.save()
        serializer = FeedbackSerializer(new_feedback)
        return Response(serializer.data)

