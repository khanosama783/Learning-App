import { NextFunction, Request, Response } from "express";
import { CatchAsyncError } from "../middleware/catchAsyncError";
import ErrorHandler from "../utils/ErrorHandler";
import LayoutModel from "../models/layout.model";
import cloudinary from "cloudinary";

//create layout
export const createLayout = CatchAsyncError(
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { type } = req.body;

      const isTypeExists = await LayoutModel.findOne({ type });

      if (isTypeExists) {
        return next(new ErrorHandler(`${type} already exist`, 400));
      }

      if (type === "Banner") {
        const { image, title, subTitle } = req.body;

        const myCloud = await cloudinary.v2.uploader.upload(image, {
          folder: "layout",
        });

        const banner = {
          image: {
            public_id: myCloud.public_id,
            url: myCloud.secure_url,
          },

          title,
          subTitle,
        };

        await LayoutModel.create(banner);
      }

      if (type === "FAQ") {
        const { faq } = req.body;
        const faqItems = await Promise.all(
          faq.map(async (item: any) => {
            return {
              quesion: item.question,
              answer: item.answer,
            };
          })
        );

        await LayoutModel.create({ type: "FAQ", faq: faqItems });
      }

      if (type === "Categories") {
        const { categories } = req.body;
        const categoryItems = await Promise.all(
          categories.map(async (item: any) => {
            return {
              title: item.title,
            };
          })
        );
        await LayoutModel.create({
          type: "Categories",
          categories: categoryItems,
        });
      }

      res.status(200).json({
        success: true,
        message: "Layout created successfully",
      });
    } catch (error: any) {
      return next(new ErrorHandler(error.message, 500));
    }
  }
);
