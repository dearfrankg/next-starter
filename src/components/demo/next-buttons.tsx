import { H2 } from "../heading";
import { Button } from "@nextui-org/button";
import { CameraIcon, HeartIcon } from "@radix-ui/react-icons";

export default function NextButtons() {
  return (
    <div className="space-y-8 rounded-xl border-4 p-8">
      <H2>next-ui</H2>

      <div className="flex flex-wrap gap-8">
        <Button color="secondary">Ripple</Button>
      </div>

      <div className="flex flex-wrap gap-8">
        <Button disableRipple color="default">
          Default
        </Button>
        <Button disableRipple color="primary">
          Primary
        </Button>
        <Button disableRipple color="secondary">
          Secondary
        </Button>
        <Button disableRipple color="success">
          Success
        </Button>
        <Button disableRipple color="warning">
          Warning
        </Button>
        <Button disableRipple color="danger">
          Danger
        </Button>
      </div>

      <div className="flex flex-wrap gap-8">
        <Button disableRipple color="primary" variant="solid">
          Solid
        </Button>
        <Button disableRipple color="primary" variant="faded">
          Faded
        </Button>
        <Button disableRipple color="primary" variant="bordered">
          Bordered
        </Button>
        <Button disableRipple color="primary" variant="light">
          Light
        </Button>
        <Button disableRipple color="primary" variant="flat">
          Flat
        </Button>
        <Button disableRipple color="primary" variant="ghost">
          Ghost
        </Button>
        <Button disableRipple color="primary" variant="shadow">
          Shadow
        </Button>
      </div>

      <div className="flex flex-wrap gap-8">
        <Button disableRipple color="primary" isLoading>
          Loading
        </Button>
        <CustomLoadingButton />
        <Button disableRipple color="success" endContent={<CameraIcon />}>
          Take a photo
        </Button>
        <Button
          disableRipple
          color="danger"
          variant="bordered"
          startContent={<CameraIcon />}
        >
          Delete user
        </Button>
        <Button disableRipple isIconOnly color="danger" aria-label="Like">
          <HeartIcon />
        </Button>
        <Button
          disableRipple
          isIconOnly
          color="warning"
          variant="faded"
          aria-label="Take a photo"
        >
          <CameraIcon />
        </Button>
      </div>
    </div>
  );
}

function CustomLoadingButton() {
  return (
    <Button
      isLoading
      color="secondary"
      spinner={
        <svg
          className="h-5 w-5 animate-spin text-current"
          fill="none"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
          />
          <path
            className="opacity-75"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            fill="currentColor"
          />
        </svg>
      }
    >
      Loading
    </Button>
  );
}
