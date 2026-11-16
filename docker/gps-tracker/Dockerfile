# syntax=docker/dockerfile:1
FROM maven:3.9-eclipse-temurin-17 AS build
WORKDIR /build
ADD https://github.com/LiberaeMentis/dsi-api-bolsines.git#bd457ed8349a08dad9f3533dd93530aebf844204 .
RUN mvn --batch-mode --no-transfer-progress package

FROM eclipse-temurin:17-jre-jammy
RUN apt-get update && apt-get install -y --no-install-recommends curl && rm -rf /var/lib/apt/lists/*
WORKDIR /app
COPY --from=build /build/target/gpstracker-dsi-0.0.1-SNAPSHOT.jar ./gps-tracker.jar
USER 10001
EXPOSE 8080
ENTRYPOINT ["java", "-jar", "/app/gps-tracker.jar"]
