1. calendry
2. rest api

## REST API
salah satu tipe api
adalah penghubung aplikasi komunikasi dengan data
komunikasi dalam bentuk json

URI/ endpoint/ route
server/users
GET minta data
POST mengirim data
PUT update
PATCH delete edit
DELETE delete


status code
2xx - sukses
4xx - kesalahan user
5xx - kesalahan server

Strukture request
## Method
GET, POST
## URI
/resources
# Headers
{
    "Aunthorization": "<token>"
}
# Body
{
    "nama": "..."
}
