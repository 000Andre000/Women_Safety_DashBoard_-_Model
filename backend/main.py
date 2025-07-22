from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from .auth import router as auth_router
from .safe_route import router as safe_route_router



app = FastAPI()

# CORS Setup for frontend requests
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],  # Update with your React app URL
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(auth_router)
app.include_router(safe_route_router)



# from fastapi import FastAPI, APIRouter, Query
# from fastapi.middleware.cors import CORSMiddleware
# import requests

# app = FastAPI()

# # CORS Setup for frontend requests
# app.add_middleware(
#     CORSMiddleware,
#     allow_origins=["http://localhost:5173"],  # Update with your React app URL
#     allow_credentials=True,
#     allow_methods=["*"],
#     allow_headers=["*"],
# )

# router = APIRouter(prefix="/api")

# @router.get("/route")
# def get_safe_route(src: str = Query(...), dst: str = Query(...)):
#     osrm_url = f"http://router.project-osrm.org/route/v1/driving/{src};{dst}?overview=full&geometries=geojson"
#     response = requests.get(osrm_url)
#     if response.status_code != 200:
#         return {"error": "Failed to fetch route from OSRM"}
#     return response.json()

# app.include_router(router)
