# Role-Based Dashboard Access System

A React.js application implementing role-based access control with authentication, dynamic routing, and permission-based UI rendering.

## 🚀 Features

- **Authentication System**: Mock login with hardcoded credentials
- **Role-Based Access Control**: Different dashboard sections based on user roles
- **Protected Routes**: Route-level permission checking
- **Redux State Management**: User data and authentication state management
- **Dynamic Navigation**: Auto-redirect based on user permissions
- **Responsive Design**: Mobile-friendly interface
- **Form Validation**: Client-side validation using Yup schema
- **Loading States**: User feedback during API calls
- **Error Handling**: Comprehensive error messages and unauthorized access handling

## 👥 User Roles & Permissions

### Admin
- **Sections**: Users, Reports, Settings
- **Permissions**: `view_users`, `view_reports`, `view_settings`
- **Credentials**: `admin@example.com` / `admin123`

### Manager
- **Sections**: Reports, Team
- **Permissions**: `view_reports`, `view_team`
- **Credentials**: `manager@example.com` / `manager123`

### Employee
- **Sections**: Profile, Tasks
- **Permissions**: `view_profile`, `view_tasks`
- **Credentials**: `employee@example.com` / `employee123`

## 🛠 Tech Stack

- **Frontend**: React.js (Functional Components)
- **State Management**: Redux Toolkit
- **Routing**: React Router DOM
- **HTTP Client**: Axios
- **Form Handling**: React Hook Form
- **Validation**: Yup
- **Styling**: Tailwind CSS
- **Icons**: React Icons
- **Notifications**: React Hot Toast

## 📁 Project Structure

```
src/
├── api/
│   ├── axiosInstance.js      # Axios configuration with mock interceptors
│   └── authApi.js           # Authentication API functions
├── components/
│   ├── form/
│   │   ├── FormError.jsx    # Error display component
│   │   ├── Input.jsx        # Reusable input component
│   │   └── PasswordEye.jsx  # Password visibility toggle
│   ├── layout/
│   │   └── Layouts.jsx      # Main layout with sidebar
│   ├── navbar/
│   │   └── Sidebar.jsx      # Navigation sidebar
│   └── ui/
│       ├── button.jsx       # Reusable button component
│       └── Loader.jsx       # Loading spinner
├── guards/
│   └── ProtectedRoute.jsx   # Route protection logic
├── pages/
│   ├── auth/
│   │   ├── Register.jsx     # Login form (named Register but handles login)
│   │   └── Unauthorized.jsx # Unauthorized access page
│   ├── Profile.jsx          # User profile section
│   ├── Users.jsx           # Users management (Admin only)
│   ├── Reports.jsx         # Reports section
│   ├── Settings.jsx        # Settings section (Admin only)
│   ├── Tasks.jsx           # Tasks section (Employee only)
│   ├── Team.jsx            # Team management (Manager only)
│   └── NotFoundPage.jsx    # 404 error page
├── store/
│   ├── sliceAuth/
│   │   └── authSlice.js    # Authentication Redux slice
│   └── store.js            # Redux store configuration
├── validation/
│   └── index.js            # Yup validation schemas
├── data/
│   └── index.js            # Static data and mappings
├── App.js                  # Main app component with routing
└── index.js               # React app entry point
```

## 🔧 Installation & Setup

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd role-based-dashboard
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm start
   ```

4. **Open your browser**
   Navigate to `http://localhost:3000`

## 🔐 Authentication Flow

1. **Login Process**:
   - User enters credentials on login form
   - Axios interceptor simulates API call with 1-second delay
   - Mock authentication validates against hardcoded users
   - User data stored in both Redux state and localStorage
   - Auto-redirect to appropriate dashboard section

2. **Session Persistence**:
   - User data persisted in localStorage
   - Redux state rehydrated on page refresh
   - Automatic logout functionality available

3. **Route Protection**:
   - All dashboard routes protected by `ProtectedRoute` component
   - Permission-based access control
   - Unauthorized users redirected to appropriate page

## 🎯 Key Implementation Details

### Mock API Implementation
- **Axios Interceptors**: Custom request interceptor simulates `/login` endpoint
- **Network Simulation**: 1-second delay mimics real API behavior
- **Error Handling**: Proper HTTP status codes and error messages

### State Management
- **Redux Toolkit**: Modern Redux implementation with slices
- **Persistence**: User data saved to localStorage for session continuity
- **Clean State**: Logout functionality clears both Redux and localStorage

### Route Protection
- **Permission Mapping**: Each route mapped to required permission
- **Dynamic Checking**: Real-time permission validation
- **Graceful Fallbacks**: Unauthorized access handled with user-friendly messages

### Form Handling
- **React Hook Form**: Efficient form state management
- **Yup Validation**: Schema-based validation with real-time feedback
- **User Experience**: Loading states and error messages

## 🌟 Bonus Features Implemented

✅ **React Router Integration**: Complete routing system with nested routes  
✅ **Logout Functionality**: Logout button clears Redux state and localStorage  
✅ **PrivateRoute Wrapper**: `ProtectedRoute` component checks user role before allowing access  
✅ **Dynamic Navigation**: Auto-redirect based on user's first permission  
✅ **Lazy Loading**: Code splitting for better performance  
✅ **Error Boundaries**: Comprehensive error handling  

## 🧪 Testing the Application

### Test Accounts
Use these credentials to test different user roles:

```
Admin Access:
Email: admin@example.com
Password: admin123

Manager Access:
Email: manager@example.com  
Password: manager123

Employee Access:
Email: employee@example.com
Password: employee123
```

### Test Scenarios
1. **Role-based Access**: Login with different roles and verify section visibility
2. **Route Protection**: Try accessing unauthorized routes directly via URL
3. **Session Persistence**: Refresh page and verify user stays logged in
4. **Logout Flow**: Test logout functionality and state clearing
5. **Form Validation**: Test form with invalid inputs

## 📱 Responsive Design

- Mobile-first approach using Tailwind CSS
- Responsive sidebar navigation
- Optimized form layouts for all screen sizes
- Touch-friendly interface elements

## ⏱ Development Time

**Estimated**: 2-3 hours  
**Actual Implementation**: Comprehensive solution with all requirements and bonus features completed

## 🔮 Future Enhancements

- Real API integration
- User registration functionality  
- Advanced permission management
- Dark mode support
- Unit and integration tests
- Docker containerization
- CI/CD pipeline setup

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.

---

**Built with  using React.js and modern web technologies**
