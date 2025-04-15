import { Injectable, Logger, OnModuleInit } from '@nestjs/common';
import * as cron from 'node-cron';
import { CategoriesService } from 'src/categories/categories.service';
import { CountriesService } from 'src/countries/countries.service';
import { TopicService } from 'src/topics/topics.service';
import { VersionsService } from 'src/versions/versions.service';
import { YearOfManufactureService } from 'src/year-of-manufacture/year-of-manufacture.service';

@Injectable()
export class CronService implements OnModuleInit {
  private readonly logger = new Logger(CronService.name);

  constructor(
    private readonly topicService: TopicService,
    private readonly countruyService: CountriesService,
    private readonly categoryService: CategoriesService,
    private readonly versionService: VersionsService,
    private readonly yearOfManufactureService: YearOfManufactureService,
  ) {}

  onModuleInit() {
    this.startDeleteOldTopicsJob();
  }

  /**
   * Xóa các chủ đề đã bị xóa ảo quá 30 ngày
   */
  startDeleteOldTopicsJob() {
    cron.schedule('0 0 * * *', () => {
      void (async () => {
        this.logger.log('Chạy cron job: Xóa chủ đề đã bị xóa ảo quá 30 ngày');
        const deletedCount =
          await this.topicService.permanentlyDeleteOldTopics();
        this.logger.log(`Đã xóa ${deletedCount} chủ đề`);
      })();
    });
  }

  /**
   * Xóa các quốc gia đã bị xóa ảo quá 30 ngày
   */
  startDeleteOldCountriesJob() {
    cron.schedule('0 0 * * *', () => {
      void (async () => {
        this.logger.log('Chạy cron job: Xóa quốc gia đã bị xóa ảo quá 30 ngày');
        const deletedCount =
          await this.countruyService.permanentlyDeleteOldCountries();
        this.logger.log(`Đã xóa ${deletedCount} quốc gia`);
      })();
    });
  }

  /**
   * Xóa các loại phim đã bị xóa ảo quá 30 ngày
   */
  startDeleteOldCategoryJob() {
    cron.schedule('0 0 * * *', () => {
      void (async () => {
        this.logger.log(
          'Chạy cron job: Xóa loại phim đã bị xóa ảo quá 30 ngày',
        );
        const deletedCount =
          await this.categoryService.permanentlyDeleteOldCategories();
        this.logger.log(`Đã xóa ${deletedCount} loại phim`);
      })();
    });
  }

  /**
   * Xóa các phiên bản đã bị xóa ảo quá 30 ngày
   */
  startDeleteOldVerisonJob() {
    cron.schedule('0 0 * * *', () => {
      void (async () => {
        this.logger.log(
          'Chạy cron job: Xóa phiên bản đã bị xóa ảo quá 30 ngày',
        );
        const deletedCount =
          await this.versionService.permanentlyDeleteOldVersions();
        this.logger.log(`Đã xóa ${deletedCount} phiên bản`);
      })();
    });
  }

  /**
   * Xóa các năm sản xuất đã bị xóa ảo quá 30 ngày
   */
  startDeleteOldYearOfManufactureJob() {
    cron.schedule('0 0 * * *', () => {
      void (async () => {
        this.logger.log(
          'Chạy cron job: Xóa năm sản xuất đã bị xóa ảo quá 30 ngày',
        );
        const deletedCount =
          await this.yearOfManufactureService.permanentlyDeleteOldYearOfManufactures();
        this.logger.log(`Đã xóa ${deletedCount} năm sản xuất`);
      })();
    });
  }
}
