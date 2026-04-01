from rest_framework import viewsets, permissions, routers
from rest_framework.decorators import api_view
from rest_framework.response import Response
from django.contrib.auth import get_user_model
from .models import Team, Activity, Leaderboard, Workout
from .serializers import UserSerializer, TeamSerializer, ActivitySerializer, LeaderboardSerializer, WorkoutSerializer

User = get_user_model()

class UserViewSet(viewsets.ModelViewSet):
	queryset = User.objects.all()
	serializer_class = UserSerializer
	permission_classes = [permissions.AllowAny]

class TeamViewSet(viewsets.ModelViewSet):
	queryset = Team.objects.all()
	serializer_class = TeamSerializer
	permission_classes = [permissions.AllowAny]

class ActivityViewSet(viewsets.ModelViewSet):
	queryset = Activity.objects.all()
	serializer_class = ActivitySerializer
	permission_classes = [permissions.AllowAny]

class LeaderboardViewSet(viewsets.ModelViewSet):
	queryset = Leaderboard.objects.all()
	serializer_class = LeaderboardSerializer
	permission_classes = [permissions.AllowAny]

class WorkoutViewSet(viewsets.ModelViewSet):
	queryset = Workout.objects.all()
	serializer_class = WorkoutSerializer
	permission_classes = [permissions.AllowAny]

@api_view(['GET'])
def api_root(request, format=None):
	return Response({
		'users': request.build_absolute_uri('users/'),
		'teams': request.build_absolute_uri('teams/'),
		'activities': request.build_absolute_uri('activities/'),
		'leaderboard': request.build_absolute_uri('leaderboard/'),
		'workouts': request.build_absolute_uri('workouts/'),
	})
