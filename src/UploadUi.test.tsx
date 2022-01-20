import user from "@testing-library/user-event";
import { render, waitFor, screen } from "@testing-library/react";
import UploadUi from "./UploadUi";
import OutputText from "./OutputText";

const mockDocValues = [{ name: "test.pdf", lastModified: 1642078491224 }];

describe("upload functionality", () => {
  test("upload should work", async () => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { getByTestId } = render(
      <>
        <UploadUi />
        <OutputText output="mock-output" />
      </>
    );
    const str = JSON.stringify(mockDocValues);
    const blob = new Blob([str]);
    const file = new File([blob], "document.pdf", {
      type: "application/pdf",
    });
    File.prototype.text = jest.fn().mockResolvedValueOnce(str);
    const input = screen.getByTestId("upload-input");
    user.upload(input, file);
    // eslint-disable-next-line testing-library/prefer-find-by
    await waitFor(() => expect(screen.getByTestId("output-text")).toBeTruthy());
  });
});
