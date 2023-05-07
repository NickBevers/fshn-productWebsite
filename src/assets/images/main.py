import cv2
img = cv2.imread("D:\Thomas_More\OF3\Lab 3\\fshn-productWebsite\src\\assets\images\\about-banner.jpg")
cv2.imwrite("D:\Thomas_More\OF3\Lab 3\\fshn-productWebsite\src\\assets\images\\about-banner.webp", img, [cv2.IMWRITE_WEBP_QUALITY, 50])
