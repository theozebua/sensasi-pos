'use client'

import { Card, CardBody, CardHeader, Divider } from '@nextui-org/react'
import LoginForm from './_components/login-form'

export default function Page() {
  return (
    <div className="container mt-8">
      <div className="flex justify-center">
        <Card className="max-w-md md:min-w-[400px]">
          <CardHeader>
            <span className="mx-auto block text-xl font-bold">Masuk</span>
          </CardHeader>
          <Divider />
          <CardBody>
            <LoginForm />
          </CardBody>
        </Card>
      </div>
    </div>
  )
}
