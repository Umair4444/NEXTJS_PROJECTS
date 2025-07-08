// app/403/page.tsx or pages/403.tsx
export default function ForbiddenPage() {
  return (
    <div className="min-h-screen flex items-center justify-center text-center">
      <div>
        <h1 className="text-4xl font-bold">403 - Forbidden</h1>
        <p className="text-lg mt-2">
          You don’t have permission to access this page.
        </p>
      </div>
    </div>
  );
}
