---

sidebar_position: 1
description: What's included in this boilerplate 🌟

---

# Boilerplate Essentials


### What's Included ✨

Out of the box 📦, Boilerplate includes:

- ✅ [Run Configuration](run) - Integrated run configurations for **VS-Code** and **Android Studio** so that users can run the app directly without having to configure anything
- ✅ [Environments Configs](https://pub.dev/packages/envied) - Multiple environment support for development, staging, and production
- ✅ [Navigator 2.0](https://pub.dev/packages/auto_route) - Integrated Auto Route for implementing the 
Navigator 2.0 functionality.
- ✅ [BLoC](https://pub.dev/packages/flutter_bloc) - Integrated bloc architecture for scalable, testable code which offers a clear separation between business logic and presentation
- ✅ [Logging](https://pub.dev/packages/logger) - Integrated logger package for extensible logging to capture uncaught Flutter and Dart Exceptions
- ✅ [Authentication](https://pub.dev/packages/hive) - Built-in authentication flow using BLoC and Hive
- ✅ [GitHub Templates](github.com) - Built-in GitHub templates for creating issues and PR's(Pull Request)
- ✅ [Pagination](pagination) - Integrated pagination along with API and repositories
- ✅ [Theme](pagination) - Implemented themes support along with its BLoC that users can use to switch between themes
- ✅ [Extensions](extension) - Implemented custom utility extension that can boost the workflow of the developer


### File and Folder Structure 📁

Here's the complete folder structure of the boilerplate:

```sh
├── .github
│   ├── pull_request_template.md
│   └── ISSUE_TEMPLATE
│       ├── bug_report.md
│       └── feature_request.md
├── .idea
│   └── runConfigurations
│       ├── development.xml
│       └── production.xml
├── .vscode
│   ├── extensions.json
│   └── launch.json
├── android
├── assets
│   ├── fonts
│   ├── icons
│   ├── images
│   └── l10n
├── ios
├── lib
│   ├── app
│   │   ├── config
│   │   ├── helpers
│   │   ├── observers
│   │   ├── routes
│   │   ├── themes
│   │   ├── app.dart
│   │   └── enum.dart
│   ├── core
│   │   ├── data
│   │   │   ├── model
│   │   │   │   └── user_model.dart
│   │   │   ├── repository
│   │   │   └── service
│   │   │       ├── auth_service.dart
│   │   │       └── network_helper_service.dart
│   │   ├── domain
│   │   │   └── bloc
│   │   │       ├── theme_bloc.dart
│   │   │       └── failure.dart
│   │   └── presentation
│   │       ├── screens
│   │       │   └── error_screen.dart
│   │       └── widgets
│   │           ├── app_button.dart
│   │           ├── custom_app_bar.dart
│   │           └── optimized_list_view.dart
│   ├── gen
│   ├── modules
│   │   └── splash
│   │       └── splash_screen.dart
│   │   ├── auth
│   │   │   ├── repository
│   │   │   ├── models
│   │   │   ├── signin
│   │   │   │   ├── bloc
│   │   │   │   │   └── login_bloc.dart
│   │   │   │   └── screens
│   │   │   │       └── login_screen.dart
│   │   │   ├── signup
│   │   ├── home
│   │   │   ├── bloc
│   │   │   │   ├── home_event.bloc.dart
│   │   │   │   ├── home_state.bloc.dart
│   │   │   │   └── home.bloc.dart
│   │   │   │── model
│   │   │   │   └── post_model.dart
│   │   │   ├── repository
│   │   │   │   └── home_repository.dart
│   │   │   ├── screen
│   │   │   │   └── home_screen.dart
│   │   └── profile
│   │       ├── bloc
│   │       │   ├── profile_bloc.dart
│   │       │   ├── profile_state.dart
│   │       │   └── profile_event.dart
│   │       │── model
│   │       ├── repository
│   │       ├── screen
│   │       │   └── profile_screen.dart
│   │       └── bottom_navigation_bar.dart
│   ├── bootstrap.dart
│   ├── main_development.dart
│   ├── main_production.dart
├── web
├── .gitignore
├── analysis_options.yaml
├── pubspec.lock
├── pubspec.yaml
└── README.md
```
